document.addEventListener("alpine:init", () => {
  Alpine.data("itemManager", () => ({
    allItems: [],
    filteredItems: [],
    showModal: false,
    currentItem: null,

    init() {
      this.allItems = [
{
      "name" : "Closed Door",
      "image" : "models/thumbnails/thumbnail_Screen_Shot_2014-10-27_at_8.04.12_PM.png",
      "model" : "models/js/closed-door28x80_baked.js",
      "type" : "7"
    }, 
    {
      "name" : "Open Door",
      "image" : "models/thumbnails/thumbnail_Screen_Shot_2014-10-27_at_8.22.46_PM.png",
      "model" : "models/js/open_door.js",
      "type" : "7"
    }, 
    {
      "name" : "Window",
      "image" : "models/thumbnails/thumbnail_window.png",
      "model" : "models/js/whitewindow.js",
      "type" : "3"
    }, 
    {
      "name" : "Chair",
      "image" : "models/thumbnails/thumbnail_Church-Chair-oak-white_1024x1024.jpg",
      "model" : "models/js/gus-churchchair-whiteoak.js",
      "type" : "1"
    }, 
    {
      "name" : "Red Chair",
      "image" : "models/thumbnails/thumbnail_tn-orange.png",
      "model" : "models/js/ik-ekero-orange_baked.js",
      "type" : "1"
    },
    {
      "name" : "Blue Chair",
      "image" : "models/thumbnails/thumbnail_ekero-blue3.png",
      "model" : "models/js/ik-ekero-blue_baked.js",
      "type" : "1"
    },
    {
      "name" : "Dresser - Dark Wood",
      "image" : "models/thumbnails/thumbnail_matera_dresser_5.png",
      "model" : "models/js/DWR_MATERA_DRESSER2.js",
      "type" : "1"
    }, 
    {
      "name" : "Dresser - White",
      "image" : "models/thumbnails/thumbnail_img25o.jpg",
      "model" : "models/js/we-narrow6white_baked.js",
      "type" : "1"
    },  
    {
      "name" : "Bedside table - Shale",
      "image" : "models/thumbnails/thumbnail_Blu-Dot-Shale-Bedside-Table.jpg",
      "model" : "models/js/bd-shalebedside-smoke_baked.js",
      "type" : "1"
    }, 
    {
      "name" : "Bedside table - White",
      "image" : "models/thumbnails/thumbnail_arch-white-oval-nightstand.jpg",
      "model" : "models/js/cb-archnight-white_baked.js",
      "type" : "1"
    }, 
    {
      "name" : "Wardrobe - White",
      "image" : "models/thumbnails/thumbnail_TN-ikea-kvikine.png",
      "model" : "models/js/ik-kivine_baked.js",
      "type" : "1"
    }, 
    {
      "name" : "Full Bed",
      "image" : "models/thumbnails/thumbnail_nordli-bed-frame__0159270_PE315708_S4.JPG",
      "model" : "models/js/ik_nordli_full.js",
      "type" : "1"
    }, 
    {
      "name" : "Bookshelf",
      "image" : "models/thumbnails/thumbnail_kendall-walnut-bookcase.jpg",
      "model" : "models/js/cb-kendallbookcasewalnut_baked.js",
      "type" : "1"
    }, 
        {
      "name" : "Media Console - White",
      "image" : "models/thumbnails/thumbnail_clapboard-white-60-media-console-1.jpg",
      "model" : "models/js/cb-clapboard_baked.js",
      "type" : "1"
    }, 
        {
      "name" : "Media Console - Black",
      "image" : "models/thumbnails/thumbnail_moore-60-media-console-1.jpg",
      "model" : "models/js/cb-moore_baked.js",
      "type" : "1"
    }, 
       {
      "name" : "Sectional - Olive",
      "image" : "models/thumbnails/thumbnail_img21o.jpg",
      "model" : "models/js/we-crosby2piece-greenbaked.js",
      "type" : "1"
    }, 
    {
      "name" : "Sofa - Grey",
      "image" : "models/thumbnails/thumbnail_rochelle-sofa-3.jpg",
      "model" : "models/js/cb-rochelle-gray_baked.js",
      "type" : "1"
    }, 
        {
      "name" : "Wooden Trunk",
      "image" : "models/thumbnails/thumbnail_teca-storage-trunk.jpg",
      "model" : "models/js/cb-tecs_baked.js",
      "type" : "1"
    }, 
        {
      "name" : "Floor Lamp",
      "image" : "models/thumbnails/thumbnail_ore-white.png",
      "model" : "models/js/ore-3legged-white_baked.js",
      "type" : "1"
    },
    {
      "name" : "Coffee Table - Wood",
      "image" : "models/thumbnails/thumbnail_stockholm-coffee-table__0181245_PE332924_S4.JPG",
      "model" : "models/js/ik-stockholmcoffee-brown.js",
      "type" : "1"
    }, 
    {
      "name" : "Side Table",
      "image" : "models/thumbnails/thumbnail_Screen_Shot_2014-02-21_at_1.24.58_PM.png",
      "model" : "models/js/GUSossingtonendtable.js",
      "type" : "1"
    }, 
    {
      "name" : "Dining Table",
      "image" : "models/thumbnails/thumbnail_scholar-dining-table.jpg",
      "model" : "models/js/cb-scholartable_baked.js",
      "type" : "1"
    }, 
    {
      "name" : "Dining table",
      "image" : "models/thumbnails/thumbnail_Screen_Shot_2014-01-28_at_6.49.33_PM.png",
      "model" : "models/js/BlakeAvenuejoshuatreecheftable.js",
      "type" : "1"
    },
    {
      "name" : "Blue Rug",
      "image" : "models/thumbnails/thumbnail_cb-blue-block60x96.png",
      "model" : "models/js/cb-blue-block-60x96.js",
      "type" : "8"
    },
    {
      "name" : "NYC Poster 1",
      "image" : "models/thumbnails/thumbnail_nyc2.jpg",
      "model" : "models/js/nyc-poster2.js",
      "type" : "2"
    },
    {
      "name": "Almira",
      "image": "models/thumbnails/almira.png",
      "model": "models/js/almira.js",
      "type": "1"
    },
    {
      "name": "Almirah (1)",
      "image": "models/thumbnails/almirah (1).png",
      "model": "models/Decor/almira/almirah (1).glb",
      "type": "1"
    },
    {
      "name": "Almirah for a Room",
      "image": "models/thumbnails/almirah_for_a_room.png",
      "model": "models/Decor/almira/almirah_for_a_room.glb",
      "type": "1"
    },

      ];
      this.filteredItems = this.allItems;
      this.renderItems();
    },

    loadItems() {
      if (this.allItems.length === 0) this.init();

      const input = document.getElementById("item-search");
      if (input) {
        input.addEventListener("input", (e) => {
          const query = e.target.value.toLowerCase();
          this.filteredItems = this.allItems.filter(item =>
            item.name.toLowerCase().includes(query)
          );
          this.renderItems();
        });
      }
    },

    renderItems() {
      const wrapper = document.getElementById("items-wrapper");
      if (!wrapper) return;

      wrapper.innerHTML = "";
      this.filteredItems.forEach(item => {
        const div = document.createElement("div");
        div.className = "item cursor-pointer";
        div.innerHTML = `
          <a class="thumbnail add-item" 
             model-name="${item.name}" 
             model-url="${item.model}" 
             model-type="${item.type}">
            <img src="${item.image}" alt="Add Item" class="w-full object-cover rounded mb-1"/>
            <div class="text-center text-sm">${item.name}</div>
          </a>
        `;
        div.addEventListener("click", () => {
          this.currentItem = item;
          this.showModal = true;
          this.$nextTick(() => {
            this.load3DModel(item.model);
          });
        });
        wrapper.appendChild(div);
      });
    },

    load3DModel(modelPath) {
      const container = this.$refs.modelCanvas;
      if (!container) {
        console.error('Model canvas container not found.');
        return;
      }

      // Clear previous model if exists
      container.innerHTML = '';

      // Three.js setup
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(45, container.clientWidth / container.clientHeight, 0.1, 1000);
      const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setSize(container.clientWidth, container.clientHeight);
      container.appendChild(renderer.domElement);

      // Lights
      const ambientLight = new THREE.AmbientLight(0xffffff, 1);
      scene.add(ambientLight);

      const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
      directionalLight.position.set(5, 10, 7.5);
      scene.add(directionalLight);

      // Determine loader by file extension
      const ext = modelPath.split('.').pop().toLowerCase();

if (ext === 'js') {
  const objectLoader = new THREE.ObjectLoader();
  objectLoader.load(modelPath, (obj) => {
    scene.add(obj);
    animate();
  }, undefined, (error) => {
    console.error('ObjectLoader Load Error:', error);
  });
}

 else {
        console.error('Unsupported model format:', modelPath);
      }

      camera.position.z = 5;

      function animate() {
        requestAnimationFrame(animate);
        renderer.render(scene, camera);
      }

      // Responsive resize
      const handleResize = () => {
        camera.aspect = container.clientWidth / container.clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(container.clientWidth, container.clientHeight);
      };

      window.addEventListener('resize', handleResize);

      const observer = new MutationObserver((mutationsList) => {
        for (const mutation of mutationsList) {
          if (mutation.attributeName === 'style' && container.offsetParent === null) {
            renderer.dispose();
            window.removeEventListener('resize', handleResize);
            observer.disconnect();
          }
        }
      });

      observer.observe(container.closest('[x-show]'), { attributes: true });
    }

  }));
});
