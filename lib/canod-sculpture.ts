import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { RoomEnvironment } from "three/addons/environments/RoomEnvironment.js";

const LENGTH_SEGMENTS = 160;
const RING_SEGMENTS = 24;

function createRibbon() {
  const geometry = new THREE.BufferGeometry();
  const positions = new Float32Array((LENGTH_SEGMENTS + 1) * (RING_SEGMENTS + 1) * 3);
  geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3).setUsage(THREE.DynamicDrawUsage));
  const groups: number[][] = [[], [], []];
  for (let i = 0; i < LENGTH_SEGMENTS; i++) {
    for (let j = 0; j < RING_SEGMENTS; j++) {
      const a = i * (RING_SEGMENTS + 1) + j;
      const b = a + RING_SEGMENTS + 1;
      const material = i >= 150 && i < 154 ? 2 : j >= 4 && j < 10 ? 1 : 0;
      groups[material].push(a, b, a + 1, b, b + 1, a + 1);
    }
  }
  // Close both ends of the ribbon; the red inlay sits just behind the lower tip.
  for (let j = 1; j < RING_SEGMENTS - 1; j++) {
    groups[0].push(0, j, j + 1);
    const end = LENGTH_SEGMENTS * (RING_SEGMENTS + 1);
    groups[0].push(end, end + j + 1, end + j);
  }
  let offset = 0;
  groups.forEach((indices, material) => {
    geometry.addGroup(offset, indices.length, material);
    offset += indices.length;
  });
  geometry.setIndex(groups.flat());

  const update = (time: number) => {
    for (let i = 0; i <= LENGTH_SEGMENTS; i++) {
      const theta = .62 + (Math.PI * 2 - 1.24) * i / LENGTH_SEGMENTS;
      const ripple = Math.sin(theta * 2.2 + time * .6) * .055;
      const twist = Math.sin(theta * 1.3 + time * .24) * .6 + .14;
      const cx = Math.cos(theta) * (1.76 + ripple);
      const cy = Math.sin(theta) * (1.95 + ripple);
      const cz = Math.sin(theta * 2 + time * .35) * .34;
      for (let j = 0; j <= RING_SEGMENTS; j++) {
        const angle = j / RING_SEGMENTS * Math.PI * 2;
        const cosine = Math.cos(angle), sine = Math.sin(angle);
        const u = Math.sign(cosine) * Math.abs(cosine) ** .45 * .61;
        const v = Math.sign(sine) * Math.abs(sine) ** .45 * .24;
        const radial = u * Math.cos(twist) - v * Math.sin(twist);
        const depth = u * Math.sin(twist) + v * Math.cos(twist);
        const index = (i * (RING_SEGMENTS + 1) + j) * 3;
        positions[index] = cx + Math.cos(theta) * radial;
        positions[index + 1] = cy + Math.sin(theta) * radial;
        positions[index + 2] = cz + depth;
      }
    }
    geometry.attributes.position.needsUpdate = true;
    geometry.computeVertexNormals();
  };
  update(0);
  geometry.computeBoundingSphere();
  return { geometry, update };
}

export function createCanodSculpture(canvas: HTMLCanvasElement, onLost: () => void) {
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true, powerPreference: "low-power" });
  renderer.setClearColor(0x000000, 0);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75));
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = .85;
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(38, 1, .1, 50);
  camera.position.set(0, .4, 9.4);
  const controls = new OrbitControls(camera, canvas);
  controls.enableZoom = false;
  controls.enablePan = false;
  controls.enableDamping = true;
  controls.dampingFactor = .09;
  controls.rotateSpeed = .65;
  controls.minAzimuthAngle = -1.1;
  controls.maxAzimuthAngle = 1.1;
  controls.minPolarAngle = .8;
  controls.maxPolarAngle = 2.25;
  controls.target.set(0, -.1, 0);
  controls.update();
  controls.saveState();
  // Keep vertical touch gestures available for scrolling the page.
  canvas.style.touchAction = "pan-y";

  const room = new RoomEnvironment();
  const pmrem = new THREE.PMREMGenerator(renderer);
  const environment = pmrem.fromScene(room, .04);
  scene.environment = environment.texture;
  scene.environmentIntensity = 1;
  room.dispose();
  pmrem.dispose();

  const silver = new THREE.MeshPhysicalMaterial({ color: 0xacb9b4, metalness: .98, roughness: .2, clearcoat: .8, clearcoatRoughness: .17 });
  const enamel = new THREE.MeshPhysicalMaterial({ color: 0x90a98f, metalness: .24, roughness: .23, clearcoat: 1, clearcoatRoughness: .13 });
  const red = new THREE.MeshPhysicalMaterial({ color: 0xb32236, metalness: .45, roughness: .23, clearcoat: 1 });
  const ribbon = createRibbon();
  const sculpture = new THREE.Mesh(ribbon.geometry, [silver, enamel, red]);
  sculpture.rotation.set(.12, -.38, -.16);
  sculpture.castShadow = true;
  sculpture.receiveShadow = true;
  scene.add(sculpture);

  scene.add(new THREE.HemisphereLight(0xf5fff0, 0x748679, .8));
  const light = new THREE.DirectionalLight(0xffffff, 2);
  light.position.set(-3, 7, 5);
  light.castShadow = true;
  light.shadow.mapSize.set(1024, 1024);
  light.shadow.camera.left = -5;
  light.shadow.camera.right = 5;
  light.shadow.camera.top = 5;
  light.shadow.camera.bottom = -5;
  light.shadow.normalBias = .04;
  light.shadow.bias = -.0001;
  light.shadow.radius = 5;
  scene.add(light);
  const floorGeometry = new THREE.PlaneGeometry(40, 40);
  const floorMaterial = new THREE.ShadowMaterial({ color: 0x3e5745, opacity: .11 });
  const floor = new THREE.Mesh(floorGeometry, floorMaterial);
  floor.rotation.x = -Math.PI / 2;
  floor.position.y = -2.9;
  floor.receiveShadow = true;
  scene.add(floor);

  let disposed = false, frame = 0, time = 0, lastTime = 0, paused = false, visible = true;
  const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
  let reduced = preference.matches;

  const schedule = () => {
    if (!disposed && !frame && visible && !document.hidden) frame = requestAnimationFrame(draw);
  };
  const draw = (now: number) => {
    frame = 0;
    if (disposed) return;
    const delta = lastTime ? Math.min((now - lastTime) / 1000, .05) : 0;
    lastTime = now;
    if (!paused && !reduced) {
      time += delta;
      ribbon.update(time);
      sculpture.rotation.y = -.38 + Math.sin(time * .32) * .13;
      sculpture.rotation.z = -.16 + Math.sin(time * .23) * .04;
      sculpture.position.y = Math.sin(time * .65) * .095;
    }
    const changing = controls.update();
    renderer.render(scene, camera);
    if ((!paused && !reduced) || changing) schedule();
  };
  const resize = () => {
    const { width, height } = canvas.getBoundingClientRect();
    if (!width || !height) return;
    renderer.setSize(width, height, false);
    camera.aspect = width / height;
    camera.fov = camera.aspect < .9 ? 44 : 38;
    camera.updateProjectionMatrix();
    schedule();
  };
  const visibility = () => {
    lastTime = 0;
    if (document.hidden || !visible) {
      cancelAnimationFrame(frame);
      frame = 0;
    } else schedule();
  };
  const motionPreference = () => { reduced = preference.matches; lastTime = 0; schedule(); };
  const contextLost = (event: Event) => { event.preventDefault(); onLost(); };
  const observer = new ResizeObserver(resize);
  const intersection = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; visibility(); });
  observer.observe(canvas);
  intersection.observe(canvas);
  preference.addEventListener("change", motionPreference);
  document.addEventListener("visibilitychange", visibility);
  canvas.addEventListener("webglcontextlost", contextLost);
  controls.addEventListener("change", schedule);
  resize();
  renderer.render(scene, camera);

  return {
    setPaused(value: boolean) { paused = value; lastTime = 0; schedule(); },
    rotate(angle: number) {
      camera.position.sub(controls.target).applyAxisAngle(new THREE.Vector3(0, 1, 0), angle).add(controls.target);
      controls.update();
      schedule();
    },
    reset() {
      controls.reset();
      time = 0;
      ribbon.update(0);
      sculpture.rotation.set(.12, -.38, -.16);
      sculpture.position.y = 0;
      schedule();
    },
    dispose() {
      if (disposed) return;
      disposed = true;
      cancelAnimationFrame(frame);
      observer.disconnect();
      intersection.disconnect();
      preference.removeEventListener("change", motionPreference);
      document.removeEventListener("visibilitychange", visibility);
      canvas.removeEventListener("webglcontextlost", contextLost);
      controls.removeEventListener("change", schedule);
      controls.dispose();
      ribbon.geometry.dispose();
      silver.dispose(); enamel.dispose(); red.dispose();
      floorGeometry.dispose(); floorMaterial.dispose();
      environment.dispose();
      light.shadow.dispose();
      renderer.dispose();
      renderer.forceContextLoss();
    },
  };
}

export type CanodSculpture = ReturnType<typeof createCanodSculpture>;
