<script setup>
const projects = ref([
  {
    pic: 'src/assets/img/project-pic-1.png',
    type: 'WEB',
    name: '軌道漫遊列車之旅',
    description:
      '這是一個團隊合作開發的網站項目，<br>旨在提供使用者一個互動式的平台，探索和計劃他們的小火車旅行。<br>在這個項目中，我參與了從概念發想到最終產品的全過程。<br>我負責網站的介面設計和前後端開發，使用 Vue.js 和 SCSS 來創建響應式的用戶界面，並透過 JavaScript 增強互動性。<br>後端方面，我使用 PHP 和 MySQL 進行資料庫的規劃和建置，並利用 Ajax 和 Axios 技術實現前後端的資料串接。<br>這個項目不僅鍛鍊了我的全端開發能力，也讓我學習到團隊合作如何溝通及解決問題。',
    github: '',
    demo: '',
    viewPic: 'src/assets/img/view-pic-1.png',
    marquee:
      '軌道漫遊列車之旅 ・ 軌道漫遊列車之旅 ・ 軌道漫遊列車之旅 ・ 軌道漫遊列車之旅 ・ 軌道漫遊列車之旅 ・ 軌道漫遊列車之旅 ・ 軌道漫遊列車之旅 ・ 軌道漫遊列車之旅 ・ 軌道漫遊列車之旅 ・ 軌道漫遊列車之旅 ・ 軌道漫遊列車之旅 ・ 軌道漫遊列車之旅 ・ 軌道漫遊列車之旅 ・ 軌道漫遊列車之旅 ・ 軌道漫遊列車之旅 ・ 軌道漫遊列車之旅 ・ 軌道漫遊列車之旅 ・ 軌道漫遊列車之旅 ・ 軌道漫遊列車之旅 ・ 軌道漫遊列車之旅 ・ 軌道漫遊列車之旅 ・ 軌道漫遊列車之旅 ・ 軌道漫遊列車之旅 ・ 軌道漫遊列車之旅 ・ 軌道漫遊列車之旅 ・ 軌道漫遊列車之旅 ・ 軌道漫遊列車之旅 ・ 軌道漫遊列車之旅 ・ 軌道漫遊列車之旅 ・ 軌道漫遊列車之旅 ・ '
  },
  {
    pic: 'src/assets/img/project-pic-2.png',
    type: 'WEB',
    name: '餓魚漢堡',
    description:
      '這是一個自行構想和設計的漢堡餐廳介紹靜態網站，提供菜單、門市查找、最新消息及食品保證書查看，使用HTML、CSS、JavaScript和jQuery技術開發。',
    github: '',
    demo: '',
    viewPic: 'src/assets/img/view-pic-2.png',
    marquee:
      '餓魚漢堡 ・ 餓魚漢堡 ・ 餓魚漢堡 ・ 餓魚漢堡 ・ 餓魚漢堡 ・ 餓魚漢堡 ・ 餓魚漢堡 ・ 餓魚漢堡 ・ 餓魚漢堡 ・ 餓魚漢堡 ・ 餓魚漢堡 ・ 餓魚漢堡 ・ 餓魚漢堡 ・ 餓魚漢堡 ・ 餓魚漢堡 ・ 餓魚漢堡 ・ 餓魚漢堡 ・ 餓魚漢堡 ・ 餓魚漢堡 ・ 餓魚漢堡 ・ 餓魚漢堡 ・ 餓魚漢堡 ・ 餓魚漢堡 ・ 餓魚漢堡 ・ 餓魚漢堡 ・ 餓魚漢堡 ・ 餓魚漢堡 ・ 餓魚漢堡 ・ 餓魚漢堡 ・ 餓魚漢堡 ・ 餓魚漢堡 ・ 餓魚漢堡 ・ 餓魚漢堡 ・ 餓魚漢堡 ・ 餓魚漢堡 ・ 餓魚漢堡 ・ 餓魚漢堡 ・ 餓魚漢堡 ・ 餓魚漢堡 ・ 餓魚漢堡 ・ 餓魚漢堡 ・ 餓魚漢堡 ・ 餓魚漢堡 ・ 餓魚漢堡 ・ 餓魚漢堡 ・ 餓魚漢堡 ・ 餓魚漢堡 ・ 餓魚漢堡 ・ '
  },
  {
    pic: 'src/assets/img/project-pic-3.png',
    type: 'WEB',
    name: '虛擬貓咪總統大選開票網站',
    description:
      '這是一個團隊合作開發的虛擬貓咪總統大選開票網站，為六角學院2023年The F2E 5th修煉精神時光屋比賽的作品。<br>採用圖像化呈現得票數據，讓使用者輕易掌握選情。<br>我負責首頁、候選人介紹頁及Navbar的開發，使用技術包括JavaScript ES6、Vue3 + Vite、Scss、RWD 和 Git 。<br>遇到的挑戰包括首頁不規則排版和候選人頁面的資料抓取。<br>此外，我還負責製作桌機及手機版的prototype。',
    github: '',
    demo: '',
    viewPic: 'src/assets/img/view-pic-3.png',
    marquee:
      '虛擬貓咪總統大選開票網站 ・ 虛擬貓咪總統大選開票網站 ・ 虛擬貓咪總統大選開票網站 ・ 虛擬貓咪總統大選開票網站 ・ 虛擬貓咪總統大選開票網站 ・ 虛擬貓咪總統大選開票網站 ・ 虛擬貓咪總統大選開票網站 ・ 虛擬貓咪總統大選開票網站 ・ 虛擬貓咪總統大選開票網站 ・ 虛擬貓咪總統大選開票網站 ・ 虛擬貓咪總統大選開票網站 ・ 虛擬貓咪總統大選開票網站 ・ 虛擬貓咪總統大選開票網站 ・ 虛擬貓咪總統大選開票網站 ・ 虛擬貓咪總統大選開票網站 ・ 虛擬貓咪總統大選開票網站 ・ 虛擬貓咪總統大選開票網站 ・ 虛擬貓咪總統大選開票網站 ・ 虛擬貓咪總統大選開票網站 ・ 虛擬貓咪總統大選開票網站 ・ 虛擬貓咪總統大選開票網站 ・ '
  },
  {
    pic: 'src/assets/img/project-pic-4.png',
    type: 'WEB',
    name: '拼拼 - 募資網站',
    description:
      '這是一個靜態募資網站，包含專案介紹、常見問答、目前進度、留言、方案選擇和贊助專案等區塊。<br>網站主要使用HTML、CSS、Bootstrap、JavaScript 技術開發。',
    github: '',
    demo: '',
    viewPic: 'src/assets/img/view-pic-4.png',
    marquee:
      '拼拼 - 募資網站 ・ 拼拼 - 募資網站 ・ 拼拼 - 募資網站 ・ 拼拼 - 募資網站 ・ 拼拼 - 募資網站 ・ 拼拼 - 募資網站 ・ 拼拼 - 募資網站 ・ 拼拼 - 募資網站 ・ 拼拼 - 募資網站 ・ 拼拼 - 募資網站 ・ 拼拼 - 募資網站 ・ 拼拼 - 募資網站 ・ 拼拼 - 募資網站 ・ 拼拼 - 募資網站 ・ 拼拼 - 募資網站 ・ 拼拼 - 募資網站 ・ 拼拼 - 募資網站 ・ 拼拼 - 募資網站 ・ 拼拼 - 募資網站 ・ 拼拼 - 募資網站 ・ 拼拼 - 募資網站 ・ 拼拼 - 募資網站 ・ 拼拼 - 募資網站 ・ 拼拼 - 募資網站 ・ 拼拼 - 募資網站 ・ 拼拼 - 募資網站 ・ 拼拼 - 募資網站 ・ 拼拼 - 募資網站 ・ 拼拼 - 募資網站 ・ 拼拼 - 募資網站 ・ '
  }
])

import { ref } from 'vue'

const selectedProject = ref(null) // 存储被选中的项目

const openModal = (project) => {
  selectedProject.value = project // 设置被选中的项目
}
</script>

<template>
  <div class="portfolio">
    <div class="project-list">
      <div class="project-item" v-for="item in projects" :key="item.name">
        <div class="pic cursor-pointer" @click="openModal(item)">
          <img :src="item.pic" alt="project pic" class="w-full" />
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

    <!-- modal -->
    <div v-if="selectedProject" class="modal">
      <div class="btn-close" @click="selectedProject = null">
        <svg
          width="80"
          height="80"
          viewBox="0 0 80 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="icon-hover-stroke-blue-dark"
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

      <div class="marquee">
        <div class="marquee-content">
          {{ selectedProject.marquee }}
        </div>
      </div>

      <div class="view-pic">
        <img :src="selectedProject.viewPic" alt="Selected project viewPic" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.project-list {
  @apply flex flex-col gap-10;
}

.project-item {
  @apply grid grid-cols-2 gap-10 items-center justify-center;
}

.pic {
  @apply rounded-[24px] overflow-hidden;
  box-shadow: 2px 3px 2px 0 #a5bbda4f;
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
    @apply w-full flex justify-center items-center px-[60px] py-[60px];

    img {
      @apply w-full;
    }
  }

  .btn-close {
    @apply absolute top-[20px] right-[20px] cursor-pointer z-20;
  }
}

// marquee
.marquee {
  @apply w-full overflow-hidden sticky top-0 py-2;
  white-space: nowrap;
  background-color: #e9f0ff90;
}

.marquee-content {
  @apply text-[24px] inline-block pl-[100%]  tracking-[5px];
  color: #7097cdc4;
  animation: marquee 100s linear infinite;
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
