let screensaverActive = false;
let interactionTimeout;
let snowflakes = [];

// Create a snowflake class
class Snowflake {
  constructor() {
    this.x = Math.random() * window.innerWidth;
    this.y = -10;
    this.speed = Math.random() * 1 + 0.5;
  }

  update() {
    this.y += this.speed;
    if (this.y > window.innerHeight) {
      this.y = -10;
      this.x = Math.random() * window.innerWidth;
    }
  }
}

function showScreensaver() {
  const screensaverContainer = document.getElementById("screensaver");
  screensaverContainer.style.display = "block";
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  screensaverContainer.appendChild(renderer.domElement);
  for (let i = 0; i < 200; i++) {
    snowflakes.push(new Snowflake());
  }

  const geometry = new THREE.BoxGeometry();
  const material = new THREE.MeshBasicMaterial({ color: 0xffffff });
  const cube = new THREE.Mesh(geometry, material);
  scene.add(cube);

  camera.position.z = 5;

  const animate = () => {
    requestAnimationFrame(animate);

    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    renderer.clear();

    for (let i = 0; i < snowflakes.length; i++) {
      const snowflake = snowflakes[i];
      snowflake.update();
      const snowflakeGeometry = new THREE.CircleGeometry(0.05, 6);
      const snowflakeMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
      const snowflakeMesh = new THREE.Mesh(snowflakeGeometry, snowflakeMaterial);
      snowflakeMesh.position.set(snowflake.x, snowflake.y, 0);
      scene.add(snowflakeMesh);
    }

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
    resetInteractionTimer();
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
