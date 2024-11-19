<script setup>
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
</script>
<template>
  <main>
    <div
      class="flex flex-col-reverse items-center sm:items-start sm:flex-row gap-[68px] sm:gap-12 md:gap-20 justify-center"
    >
      <!-- left -->
      <div class="flex flex-col gap-[80px]">
        <!-- 後端/資料庫 -->
        <div class="flex flex-col gap-7">
          <div class="title">後端 / 資料庫</div>
          <div class="content">
            <div class="content-col">
              <div class="item"><img src="@/assets/img/icon/check.svg" alt="check" />Node.js</div>
              <div class="item"><img src="@/assets/img/icon/check.svg" alt="check" />MySQL</div>
              <div class="item"><img src="@/assets/img/icon/check.svg" alt="check" />MongoDB</div>
              <div class="item"><img src="@/assets/img/icon/check.svg" alt="check" />Mongoose</div>
            </div>
            <div class="content-col">
              <div class="item"><img src="@/assets/img/icon/check.svg" alt="check" />Express</div>
              <div class="item text-gray-500">
                <img src="@/assets/img/icon/check.svg" alt="check" />PHP
              </div>
              <div class="item text-gray-500">
                <img src="@/assets/img/icon/check.svg" alt="check" />MSSQL
              </div>
              <div class="item text-gray-500">
                <img src="@/assets/img/icon/check.svg" alt="check" />Linux
              </div>
            </div>
          </div>
        </div>

        <!-- 使用者介面設計 -->
        <div class="flex flex-col gap-7">
          <div class="title">使用者介面設計</div>
          <div class="content">
            <div class="content-col">
              <div class="item"><img src="@/assets/img/icon/check.svg" alt="check" />Figma</div>
              <div class="item"><img src="@/assets/img/icon/check.svg" alt="check" />Mockup</div>
              <div class="item text-gray-500">
                <img src="@/assets/img/icon/check.svg" alt="check" />Photoshop
              </div>
            </div>
            <div class="content-col">
              <div class="item"><img src="@/assets/img/icon/check.svg" alt="check" />Wireframe</div>
              <div class="item"><img src="@/assets/img/icon/check.svg" alt="check" />Prototype</div>
              <div class="item text-gray-500">
                <img src="@/assets/img/icon/check.svg" alt="check" />Illustrator
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- right -->
      <div class="flex flex-col gap-[68px]">
        <!-- 前端開發 -->
        <div class="flex flex-col gap-7">
          <div class="title">前端開發</div>
          <div class="content">
            <div class="content-col">
              <div class="item"><img src="@/assets/img/icon/check.svg" alt="check" />HTML</div>
              <div class="item"><img src="@/assets/img/icon/check.svg" alt="check" />CSS, SCSS</div>
              <div class="item">
                <img src="@/assets/img/icon/check.svg" alt="check" />JavaScript
              </div>
              <div class="item">
                <img src="@/assets/img/icon/check.svg" alt="check" />TypeScript
              </div>
              <div class="item"><img src="@/assets/img/icon/check.svg" alt="check" />jQuery</div>
              <div class="item"><img src="@/assets/img/icon/check.svg" alt="check" />Vue 3</div>
              <div class="item"><img src="@/assets/img/icon/check.svg" alt="check" />Nuxt 3</div>
            </div>
            <div class="content-col">
              <div class="item"><img src="@/assets/img/icon/check.svg" alt="check" />Github</div>
              <div class="item"><img src="@/assets/img/icon/check.svg" alt="check" />RWD</div>
              <div class="item"><img src="@/assets/img/icon/check.svg" alt="check" />Axios</div>
              <div class="item">
                <img src="@/assets/img/icon/check.svg" alt="check" />Bootstrap 5
              </div>
              <div class="item">
                <img src="@/assets/img/icon/check.svg" alt="check" />Tailwind CSS
              </div>
              <div class="item"><img src="@/assets/img/icon/check.svg" alt="check" />Firebase</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped lang="scss">
.title {
  @apply font-bold;
}

.content {
  @apply flex gap-10;
}

.content-col {
  @apply flex flex-col gap-7;
}

.item {
  @apply w-[124px] flex items-center gap-2 font-medium col-span-1;
}
</style>
