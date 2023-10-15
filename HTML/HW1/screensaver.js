let screensaverActive = false;
let interactionTimeout;
function showScreensaver() {
  const screensaverContainer = document.getElementById("screensaver");
  screensaverContainer.style.display = "block";
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  screensaverContainer.appendChild(renderer.domElement);
  const geometry = new THREE.BoxGeometry();
  const material = new THREE.MeshBasicMaterial({ color: 0xffffff });
  const cube = new THREE.Mesh(geometry, material);
  scene.add(cube);

  camera.position.z = 5;
  const animate = () => {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render(scene, camera);
  };

  animate();

  screensaverActive = true;
}
function hideScreensaver() {
  const screensaverContainer = document.getElementById("screensaver");
  screensaverContainer.style.display = "none";
  screensaverContainer.innerHTML = "";

  screensaverActive = false;
}
function resetInteractionTimer() {
  if (interactionTimeout) {
    clearTimeout(interactionTimeout);
  }
  interactionTimeout = setTimeout(showScreensaver, 60000);
}
document.addEventListener("mousemove", () => {
  if (screensaverActive) {
    hideScreensaver();
    resetInteractionTimer();
  } else {
    resetInteractionTimeout();
  }
});

document.addEventListener("keydown", () => {
  if (screensaverActive) {
    hideScreensaver();
    resetInteractionTimer();
  } else {
    resetInteractionTimer();
  }
});
resetInteractionTimer();
