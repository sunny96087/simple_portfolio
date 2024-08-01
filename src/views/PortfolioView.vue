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

const projectPic5 = ref(
  'https://firebasestorage.googleapis.com/v0/b/simpleportfolio-64b60.appspot.com/o/img%2Fproject-pic-5.png?alt=media&token=fc369e5b-2094-4172-ae7c-4ceba0e3c8be'
)
const viewPic5 = ref(
  'https://firebasestorage.googleapis.com/v0/b/simpleportfolio-64b60.appspot.com/o/img%2Fview-pic-5.png?alt=media&token=3141544c-0579-490e-a507-4e848bf67c1a'
)

const projectPic6 = ref(
  'https://firebasestorage.googleapis.com/v0/b/simpleportfolio-64b60.appspot.com/o/img%2Fproject-pic-6.png?alt=media&token=e8366912-60f7-4fbf-9989-cbdeb01b8156'
)
const viewPic6 = ref(
  'https://firebasestorage.googleapis.com/v0/b/simpleportfolio-64b60.appspot.com/o/img%2Fview-pic-6.png?alt=media&token=e3555db5-77bd-4fcc-ac9f-4656aaa4bc6a'
)

const projectPic7 = ref(
  'https://firebasestorage.googleapis.com/v0/b/simpleportfolio-64b60.appspot.com/o/img%2Fproject-pic-7.png?alt=media&token=ee802582-3870-4ba3-85e8-8e72136f31c3'
)
const viewPic7 = ref(
  'https://firebasestorage.googleapis.com/v0/b/simpleportfolio-64b60.appspot.com/o/img%2Fview-pic-7.png?alt=media&token=9670b1dc-df3d-4fff-b965-c94c06a5de95'
)

const projectPic8 = ref(
  'https://firebasestorage.googleapis.com/v0/b/simpleportfolio-64b60.appspot.com/o/img%2Fproject-pic-8.png?alt=media&token=0ce8c72a-361e-4738-8fcb-58d24a90476c'
)
const viewPic8 = ref(
  'https://firebasestorage.googleapis.com/v0/b/simpleportfolio-64b60.appspot.com/o/img%2Fview-pic-8.png?alt=media&token=b191db34-2aba-4417-8a21-28026c6fb167'
)

const projectPic9 = ref(
  'https://firebasestorage.googleapis.com/v0/b/simpleportfolio-64b60.appspot.com/o/img%2Fproject-pic-9.png?alt=media&token=38281363-018b-4bef-83fd-a175a8b5e9f3'
)
const viewPic9 = ref(
  'https://firebasestorage.googleapis.com/v0/b/simpleportfolio-64b60.appspot.com/o/img%2Fview-pic-9.png?alt=media&token=e30b4b25-d2eb-480e-9539-a4ebc2f62d21'
)

const projectPic10 = ref(
  'https://firebasestorage.googleapis.com/v0/b/simpleportfolio-64b60.appspot.com/o/img%2Fproject-pic-10.png?alt=media&token=24ca7256-fcb6-4699-ba6d-9a10374f32aa'
)
const viewPic10 = ref(
  'https://firebasestorage.googleapis.com/v0/b/simpleportfolio-64b60.appspot.com/o/img%2Fview-pic-10.png?alt=media&token=3677025c-4d21-445a-b146-ff3aef1fbb09'
)

const projectPic11 = ref(
  'https://firebasestorage.googleapis.com/v0/b/simpleportfolio-64b60.appspot.com/o/img%2Fproject-pic-11.png?alt=media&token=fee44947-3b85-4c1f-b28f-1d46d3b48af3'
)
const viewPic11 = ref(
  'https://firebasestorage.googleapis.com/v0/b/simpleportfolio-64b60.appspot.com/o/img%2Fview-pic-11.png?alt=media&token=8a0c4d19-a3eb-44c1-aea5-c255f11668ee'
)

const projects = ref([
  {
    pic: projectPic9,
    type: 'WEB',
    name: '鸚鸚食堂 Parrot Bistro',
    description:
      '這是一個鸚鵡相關知識平台，主要提供計算鸚鵡每日攝取量的功能。<br/>此外，平台還包括品種介紹、醫療資訊、食物建議和表單回饋等頁面。<br/>專案由我獨自發想、設計，並進行前後端開發。<br/>前端使用 Nuxt 3 和 TypeScript 技術，<br/>後端採用 Node.js、Express 和 MongoDB。<br/>這個專案不僅展示了我的全端開發能力，<br/>還體現了我在專案設計和實現上的獨立作業能力。',
    github: 'https://github.com/sunny96087/parrot_web',
    demo: 'https://parrot.2fishs.com/',
    viewPic: viewPic9,
    marquee:
      '鸚鸚食堂 Parrot Bistro ・ 鸚鸚食堂 Parrot Bistro ・ 鸚鸚食堂 Parrot Bistro ・ 鸚鸚食堂 Parrot Bistro ・ 鸚鸚食堂 Parrot Bistro ・ 鸚鸚食堂 Parrot Bistro ・ 鸚鸚食堂 Parrot Bistro ・ 鸚鸚食堂 Parrot Bistro ・ 鸚鸚食堂 Parrot Bistro ・ 鸚鸚食堂 Parrot Bistro ・ 鸚鸚食堂 Parrot Bistro ・ 鸚鸚食堂 Parrot Bistro ・ 鸚鸚食堂 Parrot Bistro ・ 鸚鸚食堂 Parrot Bistro ・ 鸚鸚食堂 Parrot Bistro ・ 鸚鸚食堂 Parrot Bistro ・ 鸚鸚食堂 Parrot Bistro ・ 鸚鸚食堂 Parrot Bistro ・ 鸚鸚食堂 Parrot Bistro ・ 鸚鸚食堂 Parrot Bistro ・ 鸚鸚食堂 Parrot Bistro ・ 鸚鸚食堂 Parrot Bistro ・ 鸚鸚食堂 Parrot Bistro ・ 鸚鸚食堂 Parrot Bistro ・ 鸚鸚食堂 Parrot Bistro ・ 鸚鸚食堂 Parrot Bistro ・ 鸚鸚食堂 Parrot Bistro ・ 鸚鸚食堂 Parrot Bistro ・ 鸚鸚食堂 Parrot Bistro ・ 鸚鸚食堂 Parrot Bistro ・ 鸚鸚食堂 Parrot Bistro ・ 鸚鸚食堂 Parrot Bistro ・ '
  },
  {
    pic: projectPic10,
    type: 'WEB',
    name: 'Ciao!Craft - DIY 手作平台',
    description:
      '這是一個體驗課程預約平台，分為前台和後台。<br/>前台提供課程資訊查詢和下單等功能，<br/>後台則供品牌方進行課程上架和訂單等資料管理。<br/>我負責後台的前後端開發，同時擔任組長。<br/>前端使用 Nuxt 3 和 TypeScript 等技術，<br/>後端採用 Express、Mongoose、MongoDB 和 WebSocket。<br/>這是我在六角學院 Node.js 班的團體專題。<br/>這專案不僅加強了我的前後端開發技能，還提升了團隊協作中的溝通和領導能力。',
    github: 'https://github.com/sunny96087/ciaocraft-website',
    demo: 'https://ciaocraft-website.vercel.app/',
    viewPic: viewPic10,
    marquee:
      'Ciao!Craft - DIY 手作平台 ・ Ciao!Craft - DIY 手作平台 ・ Ciao!Craft - DIY 手作平台 ・ Ciao!Craft - DIY 手作平台 ・ Ciao!Craft - DIY 手作平台 ・ Ciao!Craft - DIY 手作平台 ・ Ciao!Craft - DIY 手作平台 ・ Ciao!Craft - DIY 手作平台 ・ Ciao!Craft - DIY 手作平台 ・ Ciao!Craft - DIY 手作平台 ・ Ciao!Craft - DIY 手作平台 ・ Ciao!Craft - DIY 手作平台 ・ Ciao!Craft - DIY 手作平台 ・ Ciao!Craft - DIY 手作平台 ・ Ciao!Craft - DIY 手作平台 ・ Ciao!Craft - DIY 手作平台 ・ Ciao!Craft - DIY 手作平台 ・ Ciao!Craft - DIY 手作平台 ・ Ciao!Craft - DIY 手作平台 ・ Ciao!Craft - DIY 手作平台 ・ Ciao!Craft - DIY 手作平台 ・ Ciao!Craft - DIY 手作平台 ・ Ciao!Craft - DIY 手作平台 ・ Ciao!Craft - DIY 手作平台 ・ Ciao!Craft - DIY 手作平台 ・ Ciao!Craft - DIY 手作平台 ・ Ciao!Craft - DIY 手作平台 ・ Ciao!Craft - DIY 手作平台 ・ '
  },
  {
    pic: projectPic11,
    type: 'WEB',
    name: '食享 TasteJoy',
    description:
      '這是一個美食紀錄平台，<br/>提供使用者記錄自己的美食地圖、參與論壇、加好友、分享美食紀錄以及隨機抽取美食等功能。<br/>我帶領一群想轉職的程式小白共同製作這個專案，<br/>負責專案發想、網頁 UI 設計、資料庫規劃與建立，以及 API 開發。<br/>目前專案還在進行中。<br/>這個專案展示了我的領導能力和技術指導能力，並且強化了我的專案管理和全端開發技能。',
    github: 'https://github.com/sunny96087/tastejoy_api',
    demo: '',
    viewPic: viewPic11,
    marquee:
      '食享 TasteJoy ・ 食享 TasteJoy ・ 食享 TasteJoy ・ 食享 TasteJoy ・ 食享 TasteJoy ・ 食享 TasteJoy ・ 食享 TasteJoy ・ 食享 TasteJoy ・ 食享 TasteJoy ・ 食享 TasteJoy ・ 食享 TasteJoy ・ 食享 TasteJoy ・ 食享 TasteJoy ・ 食享 TasteJoy ・ 食享 TasteJoy ・ 食享 TasteJoy ・ 食享 TasteJoy ・ 食享 TasteJoy ・ 食享 TasteJoy ・ 食享 TasteJoy ・ 食享 TasteJoy ・ 食享 TasteJoy ・ 食享 TasteJoy ・ 食享 TasteJoy ・ 食享 TasteJoy ・ 食享 TasteJoy ・ 食享 TasteJoy ・ 食享 TasteJoy ・ 食享 TasteJoy ・ 食享 TasteJoy ・ 食享 TasteJoy ・ 食享 TasteJoy ・ '
  },
  {
    pic: projectPic5,
    type: 'WEB',
    name: '社群網站 Chat!',
    description:
      '這是一個社群互動平台，<br/>是我在六角學院 Node.js 入門班的作品，<br/>前端使用 Nuxt 3、CKEditor 5、Pinia、ESLint 和 Axios 技術，<br/>後端則採用 Node.js、Express、Mongoose、Validator、Node-Cron、Dotenv、Firebase-Admin、Multer、Tinify、Swagger 和 Google APIs，<br/>資料庫方面使用 MongoDB 和 Firebase Storage。<br/>主要功能包括用戶登入註冊、新增文章、文章檢索、點讚留言、查看公告和追蹤用戶等，並且實現了 Email 驗證功能以確保用戶註冊和登入的安全性。',
    github: 'https://github.com/sunny96087/express_community',
    demo: 'https://community-web-4l2.pages.dev/',
    viewPic: viewPic5,
    marquee:
      '社群網站 Chat! ・ 社群網站 Chat! ・ 社群網站 Chat! ・ 社群網站 Chat! ・ 社群網站 Chat! ・ 社群網站 Chat! ・ 社群網站 Chat! ・ 社群網站 Chat! ・ 社群網站 Chat! ・ 社群網站 Chat! ・ 社群網站 Chat! ・ 社群網站 Chat! ・ 社群網站 Chat! ・ 社群網站 Chat! ・ 社群網站 Chat! ・ 社群網站 Chat! ・ 社群網站 Chat! ・ 社群網站 Chat! ・ 社群網站 Chat! ・ 社群網站 Chat! ・ 社群網站 Chat! ・ 社群網站 Chat! ・ 社群網站 Chat! ・ 社群網站 Chat! ・ 社群網站 Chat! ・ 社群網站 Chat! ・ 社群網站 Chat! ・ 社群網站 Chat! ・ 社群網站 Chat! ・ 社群網站 Chat! ・ 社群網站 Chat! ・ 社群網站 Chat! ・ '
  },
  {
    pic: projectPic6,
    type: 'WEB',
    name: '我的部落格',
    description:
      '這是我的部落格，分享日常研究及開發點滴，<br/>使用 Hexo 和 "landscape" 主題建立。',
    github: 'https://github.com/sunny96087/hexo-blog',
    demo: 'https://sunny96087.github.io/hexo-blog/',
    viewPic: viewPic6,
    marquee:
      '我的部落格 ・ 我的部落格 ・ 我的部落格 ・ 我的部落格 ・ 我的部落格 ・ 我的部落格 ・ 我的部落格 ・ 我的部落格 ・ 我的部落格 ・ 我的部落格 ・ 我的部落格 ・ 我的部落格 ・ 我的部落格 ・ 我的部落格 ・ 我的部落格 ・ 我的部落格 ・ 我的部落格 ・ 我的部落格 ・ 我的部落格 ・ 我的部落格 ・ 我的部落格 ・ 我的部落格 ・ 我的部落格 ・ 我的部落格 ・ 我的部落格 ・ 我的部落格 ・ 我的部落格 ・ 我的部落格 ・ 我的部落格 ・ 我的部落格 ・ 我的部落格 ・ 我的部落格 ・ 我的部落格 ・ 我的部落格 ・ 我的部落格 ・ 我的部落格 ・ 我的部落格 ・ 我的部落格 ・ 我的部落格 ・ 我的部落格 ・ 我的部落格 ・ 我的部落格 ・ 我的部落格 ・ 我的部落格 ・ 我的部落格 ・ '
  },
  {
    pic: projectPic7,
    type: 'WEB',
    name: '品牌形象網站',
    description:
      '這是一個靜態品牌形象網站，<br>參加六角 2024 體驗營切版任務作業二的作品，<br>使用 Vue 3、Nuxt、tailwindcss 和 swiper，<br/>有首頁、作品集、服務項目、部落格和聯絡我等頁面。',
    github: 'https://github.com/sunny96087/business_website',
    demo: 'https://business-website-2fishs-projects.vercel.app/',
    viewPic: viewPic7,
    marquee:
      '品牌形象網站 ・ 品牌形象網站 ・ 品牌形象網站 ・ 品牌形象網站 ・ 品牌形象網站 ・ 品牌形象網站 ・ 品牌形象網站 ・ 品牌形象網站 ・ 品牌形象網站 ・ 品牌形象網站 ・ 品牌形象網站 ・ 品牌形象網站 ・ 品牌形象網站 ・ 品牌形象網站 ・ 品牌形象網站 ・ 品牌形象網站 ・ 品牌形象網站 ・ 品牌形象網站 ・ 品牌形象網站 ・ 品牌形象網站 ・ 品牌形象網站 ・ 品牌形象網站 ・ 品牌形象網站 ・ 品牌形象網站 ・ 品牌形象網站 ・ 品牌形象網站 ・ 品牌形象網站 ・ 品牌形象網站 ・ 品牌形象網站 ・ 品牌形象網站 ・ 品牌形象網站 ・ 品牌形象網站 ・ 品牌形象網站 ・ 品牌形象網站 ・ 品牌形象網站 ・ 品牌形象網站 ・ 品牌形象網站 ・ '
  },
  {
    pic: projectPic8,
    type: 'WEB',
    name: '作品集',
    description:
      '這是我的個人作品集網站，<br>使用 Vue 3、Composition API 和 Vite 開發，<br>展示了我的經歷、專案和技能。',
    github: 'https://github.com/sunny96087/simple_portfolio',
    demo: 'https://profile.2fishs.com/',
    viewPic: viewPic8,
    marquee:
      '個人作品集 ・ 個人作品集 ・ 個人作品集 ・ 個人作品集 ・ 個人作品集 ・ 個人作品集 ・ 個人作品集 ・ 個人作品集 ・ 個人作品集 ・ 個人作品集 ・ 個人作品集 ・ 個人作品集 ・ 個人作品集 ・ 個人作品集 ・ 個人作品集 ・ 個人作品集 ・ 個人作品集 ・ 個人作品集 ・ 個人作品集 ・ 個人作品集 ・ 個人作品集 ・ 個人作品集 ・ 個人作品集 ・ 個人作品集 ・ 個人作品集 ・ 個人作品集 ・ 個人作品集 ・ 個人作品集 ・ 個人作品集 ・ 個人作品集 ・ 個人作品集 ・ 個人作品集 ・ 個人作品集 ・ 個人作品集 ・ 個人作品集 ・ 個人作品集 ・ 個人作品集 ・ 個人作品集 ・ 個人作品集 ・ 個人作品集 ・ 個人作品集 ・ 個人作品集 ・ '
  },
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

  // gtag.js custom_view_item_img 事件
  gtag('event', 'custom_view_item_img', {
    'custom_event_category': 'view_item_img',
    'custom_view_item_img': project.name
  });
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

// gtag.js click_action 事件
window.dataLayer = window.dataLayer || []
function gtag() {
  dataLayer.push(arguments)
}
gtag('js', new Date())
gtag('config', 'G-CRQ1NSS9T8') // 將你的 GA4 串流評估 ID 放在這裡

// 設定監聽 click 事件
document.addEventListener('click', function (e) {
  let el_tag = e.target.tagName // 取得 tag 名稱
  let el_id = e.target.tagName || 'unset' // 取得 id，如果沒有 id 就使用 unset
  let el_class = e.target.getAttribute('class') || 'unset' // 取得 class，如果沒有 class 就使用 unset
  console.log(el_tag, el_id, el_class)
  // 發送點擊事件
  gtag('event', 'click_action', {
    tag: el_tag,
    id: el_id,
    class: el_class
  })
})

// GA4 自訂事件 - 點擊外部連結 - githubLink
const sendGithubEvent = (itemName) => {
  gtag('event', 'custom_githubLink_click', {
    'custom_event_category': 'githubLink',
    'custom_githubLink_itemName': itemName
  });
};

// GA4 自訂事件 - 點擊外部連結 - domeLink
const sendDemoEvent = (itemName) => {
  gtag('event', 'custom_domeLink_click', {
    'custom_event_category': 'domeLink',
    'custom_domeLink_itemName': itemName
  });
};

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
            <a v-if="item.github" :href="item.github" target="_blank" class="btn-fill" @click="sendGithubEvent(item.name)">
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
            <a v-if="item.demo" :href="item.demo" target="_blank" class="btn-fill" @click="sendDemoEvent(item.name)">
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
  @apply fixed inset-0 overflow-auto backdrop-blur-[2px] z-[1000];
  background-color: #7097cd4a;

  .view-pic {
    @apply w-full flex justify-center items-center px-5 py-5 sm:px-[60px] sm:py-[60px];

    img {
      @apply w-full;
    }
  }
}
.btn-close {
  @apply fixed top-[20px] right-[20px] cursor-pointer z-[1001];
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
