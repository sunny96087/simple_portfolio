<script setup>
import { watchEffect, onMounted, onUnmounted, computed, ref } from 'vue'
import { useThemeStore } from '@/stores/themeStore.js'

const themeStore = useThemeStore()

const toggleTheme = () => {
  themeStore.toggleTheme()
}

watchEffect(() => {
  if (themeStore.isDarkMode) {
    document.body.classList.add('dark-mode')
  } else {
    document.body.classList.remove('dark-mode')
  }
})

// icon
const iconSun = ref(
  `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" >
    <g clip-path="url(#clip0_34_116)">
    <path d="M10.875 3V1.5C10.875 1.20163 10.9935 0.915483 11.2045 0.704505C11.4155 0.493526 11.7016 0.375 12 0.375C12.2984 0.375 12.5845 0.493526 12.7955 0.704505C13.0065 0.915483 13.125 1.20163 13.125 1.5V3C13.125 3.29837 13.0065 3.58452 12.7955 3.7955C12.5845 4.00647 12.2984 4.125 12 4.125C11.7016 4.125 11.4155 4.00647 11.2045 3.7955C10.9935 3.58452 10.875 3.29837 10.875 3ZM18.375 12C18.375 13.2609 18.0011 14.4934 17.3006 15.5418C16.6001 16.5901 15.6045 17.4072 14.4396 17.8897C13.2747 18.3722 11.9929 18.4985 10.7563 18.2525C9.51967 18.0065 8.38375 17.3994 7.49219 16.5078C6.60063 15.6162 5.99347 14.4803 5.74749 13.2437C5.50151 12.0071 5.62776 10.7253 6.11027 9.56039C6.59278 8.39551 7.40988 7.39988 8.45824 6.69938C9.5066 5.99889 10.7391 5.625 12 5.625C13.6902 5.62674 15.3107 6.29894 16.5059 7.49411C17.7011 8.68928 18.3733 10.3098 18.375 12ZM16.125 12C16.125 11.1842 15.8831 10.3866 15.4298 9.70827C14.9766 9.02992 14.3323 8.50121 13.5786 8.189C12.8248 7.87679 11.9954 7.7951 11.1953 7.95426C10.3951 8.11343 9.66008 8.50629 9.08318 9.08318C8.50629 9.66008 8.11343 10.3951 7.95426 11.1953C7.7951 11.9954 7.87679 12.8248 8.189 13.5786C8.50121 14.3323 9.02992 14.9766 9.70827 15.4298C10.3866 15.8831 11.1842 16.125 12 16.125C13.0936 16.1238 14.1421 15.6888 14.9154 14.9154C15.6888 14.1421 16.1238 13.0936 16.125 12ZM4.82906 6.42094C4.93371 6.52558 5.05794 6.6086 5.19467 6.66523C5.3314 6.72186 5.47794 6.75101 5.62594 6.75101C5.77393 6.75101 5.92048 6.72186 6.0572 6.66523C6.19393 6.6086 6.31817 6.52558 6.42281 6.42094C6.52746 6.31629 6.61047 6.19206 6.6671 6.05533C6.72374 5.9186 6.75289 5.77206 6.75289 5.62406C6.75289 5.47607 6.72374 5.32952 6.6671 5.1928C6.61047 5.05607 6.52746 4.93183 6.42281 4.82719L5.29781 3.70219C5.08647 3.49084 4.79982 3.37211 4.50094 3.37211C4.20205 3.37211 3.91541 3.49084 3.70406 3.70219C3.49272 3.91353 3.37399 4.20018 3.37399 4.49906C3.37399 4.79795 3.49272 5.08459 3.70406 5.29594L4.82906 6.42094ZM4.82906 17.5772L3.70406 18.7022C3.59942 18.8068 3.5164 18.9311 3.45977 19.0678C3.40314 19.2045 3.37399 19.3511 3.37399 19.4991C3.37399 19.6471 3.40314 19.7936 3.45977 19.9303C3.5164 20.0671 3.59942 20.1913 3.70406 20.2959C3.91541 20.5073 4.20205 20.626 4.50094 20.626C4.64893 20.626 4.79548 20.5969 4.9322 20.5402C5.06893 20.4836 5.19317 20.4006 5.29781 20.2959L6.42281 19.1709C6.63416 18.9596 6.75289 18.6729 6.75289 18.3741C6.75289 18.0752 6.63416 17.7885 6.42281 17.5772C6.21147 17.3658 5.92482 17.2471 5.62594 17.2471C5.32705 17.2471 5.04041 17.3658 4.82906 17.5772ZM18.375 6.75C18.5228 6.75012 18.6691 6.72112 18.8057 6.66465C18.9423 6.60819 19.0664 6.52538 19.1709 6.42094L20.2959 5.29594C20.4006 5.19129 20.4836 5.06706 20.5402 4.93033C20.5969 4.7936 20.626 4.64706 20.626 4.49906C20.626 4.35107 20.5969 4.20452 20.5402 4.0678C20.4836 3.93107 20.4006 3.80683 20.2959 3.70219C20.1913 3.59754 20.0671 3.51453 19.9303 3.4579C19.7936 3.40126 19.6471 3.37211 19.4991 3.37211C19.3511 3.37211 19.2045 3.40126 19.0678 3.4579C18.9311 3.51453 18.8068 3.59754 18.7022 3.70219L17.5772 4.82719C17.4189 4.98454 17.311 5.18541 17.2672 5.40425C17.2234 5.62309 17.2457 5.85001 17.3312 6.05615C17.4168 6.2623 17.5617 6.43834 17.7475 6.56189C17.9334 6.68544 18.1518 6.75092 18.375 6.75ZM19.1709 17.5791C18.9596 17.3677 18.6729 17.249 18.3741 17.249C18.0752 17.249 17.7885 17.3677 17.5772 17.5791C17.3658 17.7904 17.2471 18.0771 17.2471 18.3759C17.2471 18.6748 17.3658 18.9615 17.5772 19.1728L18.7022 20.2978C18.9135 20.5092 19.2002 20.6279 19.4991 20.6279C19.7979 20.6279 20.0846 20.5092 20.2959 20.2978C20.5073 20.0865 20.626 19.7998 20.626 19.5009C20.626 19.2021 20.5073 18.9154 20.2959 18.7041L19.1709 17.5791ZM4.125 12C4.125 11.7016 4.00647 11.4155 3.7955 11.2045C3.58452 10.9935 3.29837 10.875 3 10.875H1.5C1.20163 10.875 0.915483 10.9935 0.704505 11.2045C0.493526 11.4155 0.375 11.7016 0.375 12C0.375 12.2984 0.493526 12.5845 0.704505 12.7955C0.915483 13.0065 1.20163 13.125 1.5 13.125H3C3.29837 13.125 3.58452 13.0065 3.7955 12.7955C4.00647 12.5845 4.125 12.2984 4.125 12ZM12 19.875C11.7016 19.875 11.4155 19.9935 11.2045 20.2045C10.9935 20.4155 10.875 20.7016 10.875 21V22.5C10.875 22.7984 10.9935 23.0845 11.2045 23.2955C11.4155 23.5065 11.7016 23.625 12 23.625C12.2984 23.625 12.5845 23.5065 12.7955 23.2955C13.0065 23.0845 13.125 22.7984 13.125 22.5V21C13.125 20.7016 13.0065 20.4155 12.7955 20.2045C12.5845 19.9935 12.2984 19.875 12 19.875ZM22.5 10.875H21C20.7016 10.875 20.4155 10.9935 20.2045 11.2045C19.9935 11.4155 19.875 11.7016 19.875 12C19.875 12.2984 19.9935 12.5845 20.2045 12.7955C20.4155 13.0065 20.7016 13.125 21 13.125H22.5C22.7984 13.125 23.0845 13.0065 23.2955 12.7955C23.5065 12.5845 23.625 12.2984 23.625 12C23.625 11.7016 23.5065 11.4155 23.2955 11.2045C23.0845 10.9935 22.7984 10.875 22.5 10.875Z" fill="#FAFFFD"/>
    </g>
    <defs>
    <clipPath id="clip0_34_116">
    <rect width="24" height="24" fill="white"/>
    </clipPath>
    </defs>
    </svg>
    `
)
const iconMoon = ref(
  `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.99995 6.00023C8.99995 8.38718 9.94816 10.6764 11.636 12.3642C13.3238 14.052 15.613 15.0002 17.9999 15.0002C18.9099 15.0002 19.7869 14.8662 20.6139 14.6152C20.0524 16.4624 18.912 18.0801 17.361 19.2297C15.81 20.3794 13.9306 21.0001 11.9999 21.0002C9.8408 21.0018 7.75305 20.2271 6.11757 18.8174C4.48209 17.4078 3.40789 15.4572 3.09093 13.3214C2.77397 11.1857 3.23539 9.00713 4.39101 7.18327C5.54662 5.35941 7.3194 4.01178 9.38595 3.38623C9.12936 4.23382 8.99929 5.11465 8.99995 6.00023Z" stroke="#22252B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`
)

// gtag.js click_action 事件
window.dataLayer = window.dataLayer || []
function gtag() {
  dataLayer.push(arguments)
}
gtag('js', new Date())
gtag('config', 'G-CRQ1NSS9T8') // 將你的 GA4 串流評估 ID 放在這裡

let startTime

onMounted(() => {
  // 在頁面載入時記錄開始時間
  startTime = Date.now()

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

  // 在頁面卸載時記錄結束時間並發送事件
  window.addEventListener('beforeunload', sendTimeSpentEvent)
})

onUnmounted(() => {
  // 移除 beforeunload 事件監聽器
  window.removeEventListener('beforeunload', sendTimeSpentEvent)
})

function sendTimeSpentEvent() {
  const endTime = Date.now()
  const timeSpent = endTime - startTime
  const timeSpentInSeconds = timeSpent / 1000

  const startTimeDate = new Date(startTime).toLocaleString('zh-TW', { timeZone: 'Asia/Taipei' })
  const endTimeDate = new Date(endTime).toLocaleString('zh-TW', { timeZone: 'Asia/Taipei' })

  gtag('event', 'custom_time_spent', {
    event_category: 'user_metrics',
    start_time: startTimeDate,
    end_time: endTimeDate,
    all_time: timeSpentInSeconds
  })
}

// GA4 自訂事件 - 點擊分頁事件
const sendEvent = (pageName) => {
  gtag('event', 'custom_page_click', {
    custom_event_category: 'navigation',
    custom_event_label: pageName
  })
}

// GA4 自訂事件 - 點擊個人資料事件
const sendProfileEvent = (item) => {
  gtag('event', 'custom_profileInfo_click', {
    custom_event_category: 'profileInfo',
    custom_event_label: item
  })
}

// 聖誕節快樂 > 雪花
import SnowEffect from '@/components/SnowEffect.vue'

// 計算雪花顏色
const snowColor = computed(() => {
  return themeStore.isDarkMode ? 'white' : '#7096CD'
})
</script>

<template>
  <div class="relative">
    <!-- <button @click="toggleTheme">{{ themeStore.isDarkMode ? '淺色' : '暗色' }}模式</button> -->
    <div class="flex justify-end">
      <button @click="toggleTheme">
        <span v-if="themeStore.isDarkMode" v-html="iconSun"></span>
        <span v-else v-html="iconMoon"></span>
      </button>
    </div>
    <!-- 個人資料 區塊 -->
    <div class="w-[136px] rounded-full border-4 border-blue-dark p-1 m-auto">
      <div class="linear rounded-full overflow-hidden w-full">
        <img src="@/assets/img/mug_shot_1131119.png" alt="Yu Yi shan - 個人照片" class="w-full" />
      </div>
    </div>
    <h1 class="text-[26px] mt-3">余誼姍 Sunny 👋</h1>
    <h2 class="text-blue-dark font-medium text-[14px] mt-1">前端工程師 Front-End Developer</h2>
    <!-- github & email & linkedin -->
    <div class="flex justify-center gap-2 mt-2">
      <a
        href="https://github.com/sunny96087"
        target="_blank"
        class="icon-hover-fill-blue-dark"
        title="github"
        @click="sendProfileEvent('github')"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 2C10.6868 2 9.38642 2.25866 8.17317 2.7612C6.95991 3.26375 5.85752 4.00035 4.92893 4.92893C3.05357 6.8043 2 9.34784 2 12C2 16.42 4.87 20.17 8.84 21.5C9.34 21.58 9.5 21.27 9.5 21V19.31C6.73 19.91 6.14 17.97 6.14 17.97C5.68 16.81 5.03 16.5 5.03 16.5C4.12 15.88 5.1 15.9 5.1 15.9C6.1 15.97 6.63 16.93 6.63 16.93C7.5 18.45 8.97 18 9.54 17.76C9.63 17.11 9.89 16.67 10.17 16.42C7.95 16.17 5.62 15.31 5.62 11.5C5.62 10.39 6 9.5 6.65 8.79C6.55 8.54 6.2 7.5 6.75 6.15C6.75 6.15 7.59 5.88 9.5 7.17C10.29 6.95 11.15 6.84 12 6.84C12.85 6.84 13.71 6.95 14.5 7.17C16.41 5.88 17.25 6.15 17.25 6.15C17.8 7.5 17.45 8.54 17.35 8.79C18 9.5 18.38 10.39 18.38 11.5C18.38 15.32 16.04 16.16 13.81 16.41C14.17 16.72 14.5 17.33 14.5 18.26V21C14.5 21.27 14.66 21.59 15.17 21.5C19.14 20.16 22 16.42 22 12C22 10.6868 21.7413 9.38642 21.2388 8.17317C20.7362 6.95991 19.9997 5.85752 19.0711 4.92893C18.1425 4.00035 17.0401 3.26375 15.8268 2.7612C14.6136 2.25866 13.3132 2 12 2Z"
            fill="#7096CD"
          />
        </svg>
      </a>

      <!-- * 舊的 https://sunny96087.github.io/hexo-blog/ -->
      <a
        href="https://blog.2fishs.com/"
        target="_blank"
        class="icon-hover-fill-blue-dark"
        title="部落格"
        @click="sendProfileEvent('blog')"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_100_132)">
            <path
              d="M19.483 21H4.52047C4.32073 21.0013 4.12273 20.9629 3.93791 20.8872C3.75309 20.8114 3.58512 20.6998 3.44373 20.5587C3.30234 20.4176 3.19032 20.2499 3.11416 20.0653C3.038 19.8806 2.99921 19.6827 3.00003 19.483V4.52045C2.99876 4.32071 3.03712 4.12271 3.11286 3.93789C3.18861 3.75307 3.30026 3.58511 3.44134 3.44371C3.58242 3.30232 3.75014 3.1903 3.93479 3.11414C4.11944 3.03798 4.31735 2.99919 4.51709 3.00001H19.5381C20.3262 3.00001 21 3.67333 21 4.51708V19.4824C21 20.3261 20.3267 21 19.483 21ZM12 5.98295H9.75003C8.75108 5.9834 7.79317 6.38043 7.08681 7.08679C6.38044 7.79316 5.98341 8.75106 5.98297 9.75001V14.25C5.98341 15.249 6.38044 16.2069 7.08681 16.9132C7.79317 17.6196 8.75108 18.0166 9.75003 18.0171H14.25C15.249 18.0166 16.2069 17.6196 16.9132 16.9132C17.6196 16.2069 18.0166 15.249 18.0171 14.25V11.2671C18.0171 10.8193 17.6802 10.4824 17.2296 10.4824H16.5C16.108 10.4824 15.7671 10.1421 15.7671 9.74945C15.7673 9.25453 15.6701 8.76441 15.4809 8.30708C15.2917 7.84975 15.0142 7.43416 14.6644 7.08405C14.3146 6.73393 13.8993 6.45614 13.4421 6.26654C12.985 6.07694 12.4949 5.97923 12 5.97901V5.98295ZM14.3057 14.983H9.75003C9.35797 14.983 9.01709 14.6426 9.01709 14.25C9.01709 13.8574 9.3574 13.5171 9.75003 13.5171H14.3057C14.7017 13.5171 15.0387 13.8546 15.0387 14.25C15.0387 14.6455 14.7017 14.983 14.3057 14.983ZM12.3921 9.01708C12.7881 9.01708 13.125 9.35739 13.125 9.75001C13.125 10.1426 12.7881 10.483 12.3921 10.483H9.69434C9.29834 10.483 8.9614 10.1426 8.9614 9.75001C8.9614 9.35739 9.29834 9.01708 9.69434 9.01708H12.3921Z"
              fill="#7096CD"
            />
          </g>
          <defs>
            <clipPath id="clip0_100_132">
              <rect width="18" height="18" fill="white" transform="translate(3 3)" />
            </clipPath>
          </defs>
        </svg>
      </a>

      <a
        href="https://www.facebook.com/sunny.uy.9/"
        target="_blank"
        class="icon-hover-fill-blue-dark"
        title="facebook"
        @click="sendProfileEvent('facebook')"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.101 3.9 21 5 21H12V14H10V11.525H12V9.475C12 7.311 13.212 5.791 15.766 5.791L17.569 5.793V8.398H16.372C15.378 8.398 15 9.144 15 9.836V11.526H17.568L17 14H15V21H19C20.1 21 21 20.101 21 19V5C21 3.9 20.1 3 19 3Z"
            fill="#7096CD"
          />
        </svg>
      </a>

      <a
        href="mailto:yain13142013@gmail.com"
        target="_blank"
        class="icon-hover-fill-blue-dark"
        title="email"
        @click="sendProfileEvent('email')"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M6.78028 4.22835C10.2532 3.92388 13.7468 3.92388 17.2197 4.22835L18.7181 4.35998C19.4435 4.42349 20.1259 4.72495 20.6549 5.21565C21.184 5.70635 21.529 6.35763 21.634 7.06426C22.122 10.3377 22.122 13.6633 21.634 16.9367C21.5288 17.6432 21.1837 18.2942 20.6547 18.7847C20.1256 19.2752 19.4434 19.5766 18.7181 19.64L17.2197 19.7717C13.7468 20.0761 10.2532 20.0761 6.78028 19.7717L5.28188 19.64C4.55665 19.5766 3.8744 19.2752 3.34533 18.7847C2.81626 18.2942 2.47125 17.6432 2.36602 16.9367C1.87799 13.6633 1.87799 10.3377 2.36602 7.06426C2.47105 6.35763 2.81597 5.70635 3.34506 5.21565C3.87415 4.72495 4.5565 4.42349 5.28188 4.35998L6.78028 4.22835ZM5.93533 7.00619C5.82257 6.94655 5.69594 6.91664 5.56785 6.91937C5.43976 6.9221 5.31458 6.95737 5.20456 7.02175C5.09454 7.08613 5.00344 7.1774 4.94018 7.28665C4.87691 7.39589 4.84364 7.51936 4.84361 7.64499V16.8399C4.84361 17.0324 4.92161 17.2171 5.06045 17.3532C5.19928 17.4894 5.38759 17.5658 5.58393 17.5658C5.78027 17.5658 5.96858 17.4894 6.10741 17.3532C6.24625 17.2171 6.32425 17.0324 6.32425 16.8399V8.86066L11.6486 11.6714C11.8677 11.7875 12.1323 11.7875 12.3514 11.6714L17.6758 8.86066V16.8399C17.6758 17.0324 17.7538 17.2171 17.8926 17.3532C18.0314 17.4894 18.2197 17.5658 18.4161 17.5658C18.6124 17.5658 18.8007 17.4894 18.9396 17.3532C19.0784 17.2171 19.1564 17.0324 19.1564 16.8399V7.64499C19.1564 7.51936 19.1231 7.39589 19.0598 7.28665C18.9966 7.1774 18.9055 7.08613 18.7954 7.02175C18.6854 6.95737 18.5602 6.9221 18.4321 6.91937C18.3041 6.91664 18.1774 6.94655 18.0647 7.00619L12 10.208L5.93533 7.00619Z"
            fill="#7096CD"
          />
        </svg>
      </a>
    </div>

    <!-- about me -->
    <div class="flex justify-center gap-7 mt-5">
      <div class="flex flex-col">
        <p class="font-semibold">1Y +</p>
        <p class="text-[14px] font-medium text-blue-dark">工作經驗</p>
      </div>

      <div class="flex flex-col">
        <p class="font-semibold">14 +</p>
        <p class="text-[14px] font-medium text-blue-dark">完成專案</p>
      </div>

      <div class="flex flex-col">
        <p class="font-semibold">23Y</p>
        <p class="text-[14px] font-medium text-blue-dark">目前年紀</p>
      </div>
    </div>

    <!-- view 履歷 & call me -->
    <div class="flex justify-center gap-5 mt-5">
      <a
        href="https://drive.google.com/file/d/1ho_3Av-HUjGR__AbPcuUZUTUyTh6949x/view?usp=sharing"
        target="_blank"
        class="flex items-center text-[14px] font-semibold text-white px-5 py-3 bg-blue btn-shadow rounded-[6px]"
        @click="sendProfileEvent('resume')"
      >
        查看履歷&nbsp;
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
      </a>

      <a
        href="tel:0963460316"
        class="p-4 border border-blue rounded-[6px] btn-shadow tel-block"
        @click="sendProfileEvent('phone')"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3 5C3 3.89543 3.89543 3 5 3H8.27924C8.70967 3 9.09181 3.27543 9.22792 3.68377L10.7257 8.17721C10.8831 8.64932 10.6694 9.16531 10.2243 9.38787L7.96701 10.5165C9.06925 12.9612 11.0388 14.9308 13.4835 16.033L14.6121 13.7757C14.8347 13.3306 15.3507 13.1169 15.8228 13.2743L20.3162 14.7721C20.7246 14.9082 21 15.2903 21 15.7208V19C21 20.1046 20.1046 21 19 21H18C9.71573 21 3 14.2843 3 6V5Z"
            stroke="#7096CD"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </a>
    </div>

    <!-- Navbar -->
    <nav
      class="my-10 p-1 bg-blue-light rounded-[8px] inline-block flex-nowrap sticky top-5 shadow z-[999] cursor-pointer"
    >
      <RouterLink to="/" class="nav-item" @click="sendEvent('經歷')">經歷</RouterLink>
      <RouterLink to="/portfolio" class="nav-item" @click="sendEvent('作品集')">作品集</RouterLink>
      <RouterLink to="/skill" class="nav-item" @click="sendEvent('技能')">技能</RouterLink>
    </nav>

    <!-- 分頁 區塊 -->
    <RouterView />

    <!-- 聖誕節快樂 > 雪花 -->
    <SnowEffect 
      :snowflake-count="50"
      :snow-color="snowColor"
    />
  </div>
</template>

<style scoped lang="scss">
.linear {
  background: linear-gradient(180deg, #7096cd 0%, #cdd4e3 100%);
}

.nav-item {
  @apply inline-block text-[14px] font-semibold px-6 sm:px-10 py-3 rounded-[6px];
  color: var(--blue-dark);
}

.router-link-active {
  background-color: var(--blue);
  color: white;
  box-shadow: -1px -2px 1px 0 #0000002d inset;
}

.tel-block {
  @apply relative inline-block;
}

.tel-block::after {
  @apply right-0 absolute -bottom-[36px] hidden text-gray-700 text-[14px] px-3 py-1 rounded-sm;
  content: '聯絡電話 0963-460-316';
  white-space: nowrap;
  transition: opacity 0.3s;
  background-color: #dde9ff;
}

.tel-block:hover::after {
  @apply block;
}
</style>
