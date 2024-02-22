<script setup>
// 從 firebase 抓取檔案
const projectPic1 = ref(
  'https://firebasestorage.googleapis.com/v0/b/simpleportfolio-64b60.appspot.com/o/img%2Fproject-pic-1.png?alt=media&token=388b6fc4-a863-4d12-9e55-f81de4e8c489'
)
const viewPic1 = ref(
  'https://firebasestorage.googleapis.com/v0/b/simpleportfolio-64b60.appspot.com/o/img%2Fview-pic-1.png?alt=media&token=13087de1-32cd-4aaf-b85e-033c69b68c6f'
)

const projectPic2 = ref(
  'https://firebasestorage.googleapis.com/v0/b/simpleportfolio-64b60.appspot.com/o/img%2Fproject-pic-2.png?alt=media&token=a9f35dcc-8b4a-4424-ab54-a9d06d3d1cd1'
)
const viewPic2 = ref(
  'https://firebasestorage.googleapis.com/v0/b/simpleportfolio-64b60.appspot.com/o/img%2Fview-pic-2.png?alt=media&token=36aa361a-36a0-4fb8-adbd-5336ff19fd8a'
)

const projectPic3 = ref(
  'https://firebasestorage.googleapis.com/v0/b/simpleportfolio-64b60.appspot.com/o/img%2Fproject-pic-3.png?alt=media&token=be7338e8-883e-4ccc-b979-5bbe52df4e94'
)
const viewPic3 = ref(
  'https://firebasestorage.googleapis.com/v0/b/simpleportfolio-64b60.appspot.com/o/img%2Fview-pic-3.png?alt=media&token=8d269970-600f-4f75-a6fb-759bc0e9cd7a'
)

const projectPic4 = ref(
  'https://firebasestorage.googleapis.com/v0/b/simpleportfolio-64b60.appspot.com/o/img%2Fproject-pic-4.png?alt=media&token=d2701bfb-cedb-45e7-b37d-d312ba9763b1'
)
const viewPic4 = ref(
  'https://firebasestorage.googleapis.com/v0/b/simpleportfolio-64b60.appspot.com/o/img%2Fview-pic-4.png?alt=media&token=66d2659d-b181-42c0-ac88-9933a6e05da2'
)

const projects = ref([
  {
    pic: projectPic1,
    type: 'WEB',
    name: '軌道漫遊列車之旅',
    description:
      '這是一個團隊合作開發的網站項目，<br>旨在提供使用者一個互動式的平台，探索和計劃他們的小火車旅行。<br>在這個項目中，我參與了從概念發想到最終產品的全過程。<br>我負責網站的介面設計和前後端開發，使用 Vue.js 和 SCSS 來創建響應式的用戶界面，並透過 JavaScript 增強互動性。<br>後端方面，我使用 PHP 和 MySQL 進行資料庫的規劃和建置，並利用 Ajax 和 Axios 技術實現前後端的資料串接。<br>這個項目不僅鍛鍊了我的全端開發能力，也讓我學習到團隊合作如何溝通及解決問題。',
    github: 'https://github.com/vicky5645/chd102-g1/tree/dev',
    demo: 'https://tibamef2e.com/chd102/g1/',
    viewPic: viewPic1,
    marquee:
      '軌道漫遊列車之旅 ・ 軌道漫遊列車之旅 ・ 軌道漫遊列車之旅 ・ 軌道漫遊列車之旅 ・ 軌道漫遊列車之旅 ・ 軌道漫遊列車之旅 ・ 軌道漫遊列車之旅 ・ 軌道漫遊列車之旅 ・ 軌道漫遊列車之旅 ・ 軌道漫遊列車之旅 ・ 軌道漫遊列車之旅 ・ 軌道漫遊列車之旅 ・ 軌道漫遊列車之旅 ・ 軌道漫遊列車之旅 ・ 軌道漫遊列車之旅 ・ 軌道漫遊列車之旅 ・ 軌道漫遊列車之旅 ・ 軌道漫遊列車之旅 ・ 軌道漫遊列車之旅 ・ 軌道漫遊列車之旅 ・ 軌道漫遊列車之旅 ・ 軌道漫遊列車之旅 ・ 軌道漫遊列車之旅 ・ 軌道漫遊列車之旅 ・ 軌道漫遊列車之旅 ・ 軌道漫遊列車之旅 ・ 軌道漫遊列車之旅 ・ 軌道漫遊列車之旅 ・ 軌道漫遊列車之旅 ・ 軌道漫遊列車之旅 ・ '
  },
  {
    pic: projectPic2,
    type: 'WEB',
    name: '餓魚漢堡',
    description:
      '這是一個自行構想和設計的漢堡餐廳介紹靜態網站，提供菜單、門市查找、最新消息及食品保證書查看，使用HTML、CSS、JavaScript和jQuery技術開發。',
    github: 'https://github.com/sunny96087/project',
    demo: 'https://sunny96087.github.io/project/',
    viewPic: viewPic2,
    marquee:
      '餓魚漢堡 ・ 餓魚漢堡 ・ 餓魚漢堡 ・ 餓魚漢堡 ・ 餓魚漢堡 ・ 餓魚漢堡 ・ 餓魚漢堡 ・ 餓魚漢堡 ・ 餓魚漢堡 ・ 餓魚漢堡 ・ 餓魚漢堡 ・ 餓魚漢堡 ・ 餓魚漢堡 ・ 餓魚漢堡 ・ 餓魚漢堡 ・ 餓魚漢堡 ・ 餓魚漢堡 ・ 餓魚漢堡 ・ 餓魚漢堡 ・ 餓魚漢堡 ・ 餓魚漢堡 ・ 餓魚漢堡 ・ 餓魚漢堡 ・ 餓魚漢堡 ・ 餓魚漢堡 ・ 餓魚漢堡 ・ 餓魚漢堡 ・ 餓魚漢堡 ・ 餓魚漢堡 ・ 餓魚漢堡 ・ 餓魚漢堡 ・ 餓魚漢堡 ・ 餓魚漢堡 ・ 餓魚漢堡 ・ 餓魚漢堡 ・ 餓魚漢堡 ・ 餓魚漢堡 ・ 餓魚漢堡 ・ 餓魚漢堡 ・ 餓魚漢堡 ・ 餓魚漢堡 ・ 餓魚漢堡 ・ 餓魚漢堡 ・ 餓魚漢堡 ・ 餓魚漢堡 ・ 餓魚漢堡 ・ 餓魚漢堡 ・ 餓魚漢堡 ・ '
  },
  {
    pic: projectPic3,
    type: 'WEB',
    name: '虛擬貓咪總統大選開票網站',
    description:
      '這是一個團隊合作開發的虛擬貓咪總統大選開票網站，為六角學院2023年The F2E 5th修煉精神時光屋比賽的作品。<br>採用圖像化呈現得票數據，讓使用者輕易掌握選情。<br>我負責首頁、候選人介紹頁及Navbar的開發，使用技術包括JavaScript ES6、Vue3 + Vite、Scss、RWD 和 Git 。<br>遇到的挑戰包括首頁不規則排版和候選人頁面的資料抓取。<br>此外，我還負責製作桌機及手機版的prototype。',
    github: 'https://github.com/edwardtsai54398/F2Evotefortw2024',
    demo: 'https://edwardtsai54398.github.io/F2Evotefortw2024/#/',
    viewPic: viewPic3,
    marquee:
      '虛擬貓咪總統大選開票網站 ・ 虛擬貓咪總統大選開票網站 ・ 虛擬貓咪總統大選開票網站 ・ 虛擬貓咪總統大選開票網站 ・ 虛擬貓咪總統大選開票網站 ・ 虛擬貓咪總統大選開票網站 ・ 虛擬貓咪總統大選開票網站 ・ 虛擬貓咪總統大選開票網站 ・ 虛擬貓咪總統大選開票網站 ・ 虛擬貓咪總統大選開票網站 ・ 虛擬貓咪總統大選開票網站 ・ 虛擬貓咪總統大選開票網站 ・ 虛擬貓咪總統大選開票網站 ・ 虛擬貓咪總統大選開票網站 ・ 虛擬貓咪總統大選開票網站 ・ 虛擬貓咪總統大選開票網站 ・ 虛擬貓咪總統大選開票網站 ・ 虛擬貓咪總統大選開票網站 ・ 虛擬貓咪總統大選開票網站 ・ 虛擬貓咪總統大選開票網站 ・ 虛擬貓咪總統大選開票網站 ・ '
  },
  {
    pic: projectPic4,
    type: 'WEB',
    name: '拼拼 - 募資網站',
    description:
      '這是一個靜態募資網站，包含專案介紹、常見問答、目前進度、留言、方案選擇和贊助專案等區塊。<br>網站主要使用HTML、CSS、Bootstrap、JavaScript 技術開發。',
    github: 'https://github.com/sunny96087/BT5_pinpin',
    demo: 'https://sunny96087.github.io/BT5_pinpin/#',
    viewPic: viewPic4,
    marquee:
      '拼拼 - 募資網站 ・ 拼拼 - 募資網站 ・ 拼拼 - 募資網站 ・ 拼拼 - 募資網站 ・ 拼拼 - 募資網站 ・ 拼拼 - 募資網站 ・ 拼拼 - 募資網站 ・ 拼拼 - 募資網站 ・ 拼拼 - 募資網站 ・ 拼拼 - 募資網站 ・ 拼拼 - 募資網站 ・ 拼拼 - 募資網站 ・ 拼拼 - 募資網站 ・ 拼拼 - 募資網站 ・ 拼拼 - 募資網站 ・ 拼拼 - 募資網站 ・ 拼拼 - 募資網站 ・ 拼拼 - 募資網站 ・ 拼拼 - 募資網站 ・ 拼拼 - 募資網站 ・ 拼拼 - 募資網站 ・ 拼拼 - 募資網站 ・ 拼拼 - 募資網站 ・ 拼拼 - 募資網站 ・ 拼拼 - 募資網站 ・ 拼拼 - 募資網站 ・ 拼拼 - 募資網站 ・ 拼拼 - 募資網站 ・ 拼拼 - 募資網站 ・ 拼拼 - 募資網站 ・ '
  }
])

import { ref, onMounted, onUnmounted } from 'vue'

const selectedProject = ref(null)

const openModal = (project) => {
  selectedProject.value = project
}

const closeOnEsc = (event) => {
  if (event.key === 'Escape') {
    selectedProject.value = null
  }
}

onMounted(() => {
  window.addEventListener('keydown', closeOnEsc)
})

onUnmounted(() => {
  window.removeEventListener('keydown', closeOnEsc)
})
</script>

<template>
  <div class="portfolio">
    <div class="project-list">
      <div class="project-item" v-for="item in projects" :key="item.name">
        <div class="pic cursor-pointer" @click="openModal(item)">
          <img :src="item.pic" alt="project pic" class="w-full" draggable="false" />
          <div class="overlay">
            <div class="left-text text">View</div>
            <div class="right-text text">More</div>
          </div>
        </div>
        <div class="content">
          <span class="text-blue-dark font-medium text-[15px]">{{ item.type }}</span>
          <h4 class="font-semibold text-[20px]">{{ item.name }}</h4>
          <div v-html="item.description" class="tracking-wider leading-[26px]"></div>
          <div class="btn-row">
            <a :href="item.github" target="_blank" class="btn-fill">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 2C10.6868 2 9.38642 2.25866 8.17317 2.7612C6.95991 3.26375 5.85752 4.00035 4.92893 4.92893C3.05357 6.8043 2 9.34784 2 12C2 16.42 4.87 20.17 8.84 21.5C9.34 21.58 9.5 21.27 9.5 21V19.31C6.73 19.91 6.14 17.97 6.14 17.97C5.68 16.81 5.03 16.5 5.03 16.5C4.12 15.88 5.1 15.9 5.1 15.9C6.1 15.97 6.63 16.93 6.63 16.93C7.5 18.45 8.97 18 9.54 17.76C9.63 17.11 9.89 16.67 10.17 16.42C7.95 16.17 5.62 15.31 5.62 11.5C5.62 10.39 6 9.5 6.65 8.79C6.55 8.54 6.2 7.5 6.75 6.15C6.75 6.15 7.59 5.88 9.5 7.17C10.29 6.95 11.15 6.84 12 6.84C12.85 6.84 13.71 6.95 14.5 7.17C16.41 5.88 17.25 6.15 17.25 6.15C17.8 7.5 17.45 8.54 17.35 8.79C18 9.5 18.38 10.39 18.38 11.5C18.38 15.32 16.04 16.16 13.81 16.41C14.17 16.72 14.5 17.33 14.5 18.26V21C14.5 21.27 14.66 21.59 15.17 21.5C19.14 20.16 22 16.42 22 12C22 10.6868 21.7413 9.38642 21.2388 8.17317C20.7362 6.95991 19.9997 5.85752 19.0711 4.92893C18.1425 4.00035 17.0401 3.26375 15.8268 2.7612C14.6136 2.25866 13.3132 2 12 2Z"
                  fill="#fff"
                />
              </svg>
              GitHub
            </a>
            <a :href="item.demo" target="_blank" class="btn-fill">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 6H6C4.89543 6 4 6.89543 4 8V18C4 19.1046 4.89543 20 6 20H16C17.1046 20 18 19.1046 18 18V14M14 4H20M20 4V10M20 4L10 14"
                  stroke="#FAFFFD"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              Demo
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- view pic modal -->
    <div v-if="selectedProject" class="modal">
      <div class="marquee">
        <div class="marquee-content">
          {{ selectedProject.marquee }}
        </div>
      </div>

      <div class="view-pic">
        <img :src="selectedProject.viewPic" alt="Selected project viewPic" draggable="false" />
      </div>
    </div>
    <div v-if="selectedProject" class="btn-close" @click="selectedProject = null">
      <svg
        width="80"
        height="80"
        viewBox="0 0 80 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="icon-hover-stroke-blue-dark w-14 h-14 sm:w-20 sm:h-20"
      >
        <path
          d="M20 60L60 20M20 20L60 60"
          stroke="var(--blue)"
          stroke-width="8"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.project-list {
  @apply flex flex-col gap-10;
}

.project-item {
  @apply grid sm:grid-cols-2 gap-3 sm:gap-10 items-center justify-center;
}

.pic {
  @apply rounded-[24px] overflow-hidden relative;
  box-shadow: 2px 3px 2px 0 #a5bbda4f;
}

.pic img {
  transition: transform 0.5s ease;
}

// .pic:hover img {
//   transform: scale(1.1);
// }

.overlay {
  @apply absolute inset-0 opacity-0 flex justify-center gap-5 items-center;

  background: #7097cd4a;
  transition: opacity 0.5s ease;
}

.pic:hover .overlay {
  opacity: 1;
}

.text {
  @apply font-semibold text-white text-[28px] opacity-0;
  transition:
    opacity 0.5s ease,
    transform 0.5s ease;
}

.left-text {
  transform: translateY(-80px);
}

.right-text {
  transform: translateY(80px);
}

.pic:hover .text {
  opacity: 1;
  transform: translateY(0);
}

.pic:hover .text:first-child {
  transition-delay:
    opacity 0s,
    transform 0.3s;
}

.pic:hover .text:last-child {
  transition-delay: 0.2s;
}

.content {
  @apply flex flex-col justify-center text-left gap-1;
}

.btn-row {
  @apply flex gap-4 justify-end mt-3;
}

.btn-fill {
  @apply flex gap-1 items-center text-white font-medium px-5 py-3 rounded-[6px];
  background-color: var(--blue);

  &:hover {
    background-color: var(--blue-dark);
  }
}

.modal {
  @apply fixed inset-0 overflow-auto backdrop-blur-[2px];
  background-color: #7097cd4a;

  .view-pic {
    @apply w-full flex justify-center items-center px-5 py-5 sm:px-[60px] sm:py-[60px];

    img {
      @apply w-full;
    }
  }
}
.btn-close {
  @apply fixed top-[20px] right-[20px] cursor-pointer z-20;
}
// marquee
.marquee {
  @apply w-full overflow-hidden sticky top-0 py-2;
  white-space: nowrap;
  background-color: #e9f0ff99;
}

.marquee-content {
  @apply sm:text-[24px] inline-block pl-[100%]  tracking-[5px];
  color: var(--blue);
  animation: marquee 100s linear infinite;
  user-select: none; // 防止文字被選擇
}

@keyframes marquee {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
}
</style>
