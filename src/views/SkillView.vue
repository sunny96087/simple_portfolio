<script setup></script>
<template>
  <main>
    <div class="flex flex-col-reverse items-center sm:items-start sm:flex-row gap-20 justify-center">
      <!-- left -->
      <div class="flex flex-col gap-[82px]">
        <!-- 使用者介面設計 -->
        <div class="flex flex-col gap-7">
          <div class="title">使用者介面設計</div>
          <div class="content">
            <div class="content-col">
              <div class="item"><img src="@/assets/img/icon/check.svg" alt="check" />Figma</div>
              <div class="item"><img src="@/assets/img/icon/check.svg" alt="check" />Mockup</div>
              <div class="item"><img src="@/assets/img/icon/check.svg" alt="check" />Photoshop</div>
            </div>
            <div class="content-col">
              <div class="item"><img src="@/assets/img/icon/check.svg" alt="check" />Wireframe</div>
              <div class="item"><img src="@/assets/img/icon/check.svg" alt="check" />Prototype</div>
              <div class="item">
                <img src="@/assets/img/icon/check.svg" alt="check" />Illustrator
              </div>
            </div>
          </div>
        </div>

        <!-- 後端開發 -->
        <div class="flex flex-col gap-7">
          <div class="title">後端開發</div>
          <div class="content">
            <div class="content-col">
              <div class="item"><img src="@/assets/img/icon/check.svg" alt="check" />PHP</div>
              <div class="item"><img src="@/assets/img/icon/check.svg" alt="check" />MSSQL</div>
            </div>
            <div class="content-col">
              <div class="item"><img src="@/assets/img/icon/check.svg" alt="check" />MySQL</div>
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
              <div class="item"><img src="@/assets/img/icon/check.svg" alt="check" />CSS, SASS</div>
              <div class="item">
                <img src="@/assets/img/icon/check.svg" alt="check" />JavaScript
              </div>
              <div class="item"><img src="@/assets/img/icon/check.svg" alt="check" />jQuery</div>
              <div class="item"><img src="@/assets/img/icon/check.svg" alt="check" />Vue.js</div>
              <div class="item"><img src="@/assets/img/icon/check.svg" alt="check" />Firebase</div>
            </div>
            <div class="content-col">
              <div class="item"><img src="@/assets/img/icon/check.svg" alt="check" />Github</div>
              <div class="item"><img src="@/assets/img/icon/check.svg" alt="check" />Ajax</div>
              <div class="item"><img src="@/assets/img/icon/check.svg" alt="check" />Axios</div>
              <div class="item">
                <img src="@/assets/img/icon/check.svg" alt="check" />Bootstrap
              </div>
              <div class="item">
                <img src="@/assets/img/icon/check.svg" alt="check" />Tailwind
              </div>
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
  @apply w-[110px] flex items-center gap-2 font-medium col-span-1;
}
</style>
