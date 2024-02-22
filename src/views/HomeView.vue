<script setup></script>

<template>
  <main>
    <div class="flex flex-col-reverse sm:flex-row gap-20 justify-center">
      <!-- 求學經歷 -->
      <div class="flex flex-col items-center gap-9">
        <!-- title -->
        <div class="flex items-center gap-1">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.58325 8.75V15.0162C4.58325 15.2692 4.69742 15.5079 4.91034 15.645C5.61909 16.1012 7.44159 17.0833 9.99992 17.0833C12.5583 17.0833 14.3808 16.1012 15.0895 15.645C15.302 15.5075 15.4166 15.2692 15.4166 15.0158V8.75"
              stroke="#7096CD"
              stroke-width="2"
              stroke-linejoin="round"
            />
            <path
              d="M17.9166 9.99984V13.3332M2.08325 7.08317L9.99992 2.9165L17.9166 7.08317L9.99992 11.2498L2.08325 7.08317Z"
              stroke="#7096CD"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <span class="font-semibold">求學經歷</span>
        </div>

        <!-- content -->
        <div class="flex gap-6">
          <!-- bar -->
          <div class="flex flex-col items-center mt-[10px]">
            <div class="dot"></div>
            <div class="line"></div>
            <div class="dot"></div>
            <div class="line"></div>
            <div class="dot"></div>
            <div class="line"></div>
            <div class="dot"></div>
          </div>

          <!-- text -->
          <div class="flex flex-col gap-9 w-[220px]">
            <!-- 北訓電腦 -->
            <div class="flex flex-col text-left gap-[6px]">
              <p class="text-title">Web前端框架實戰班</p>
              <div class="flex flex-col">
                <p class="text-location">北訓電腦職訓中心</p>
                <p class="text-date">
                  <img src="@/assets/img/icon/calendar.svg" alt="calendar" />
                  2024.02 ~ 2024.04
                </p>
              </div>
            </div>

            <!-- 緯育 -->
            <div class="flex flex-col text-left gap-[6px]">
              <p class="text-title">前端工程師養成班</p>
              <div class="flex flex-col">
                <p class="text-location">緯育 TibaMe（前中壢資策會）</p>
                <p class="text-date">
                  <img src="@/assets/img/icon/calendar.svg" alt="calendar" />
                  2023.04 ~ 2023.08
                </p>
              </div>
            </div>

            <!-- 赫綵 -->
            <div class="flex flex-col text-left gap-[6px]">
              <p class="text-title">商用視覺平面設計</p>
              <div class="flex flex-col">
                <p class="text-location">赫綵設計學院</p>
                <p class="text-date">
                  <img src="@/assets/img/icon/calendar.svg" alt="calendar" />
                  2022.11 ~ 2023.04
                </p>
              </div>
            </div>

            <!-- 育德 -->
            <div class="flex flex-col text-left gap-[6px]">
              <p class="text-title">飛機修護科</p>
              <div class="flex flex-col">
                <p class="text-location">私立育德工業家事職業學校</p>
                <p class="text-date">
                  <img src="@/assets/img/icon/calendar.svg" alt="calendar" />
                  2016.08 ~ 2019.06
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 工作經歷 -->
      <div class="flex flex-col items-center gap-9">
        <!-- title -->
        <div class="flex items-center gap-1">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.58325 8.75V15.0162C4.58325 15.2692 4.69742 15.5079 4.91034 15.645C5.61909 16.1012 7.44159 17.0833 9.99992 17.0833C12.5583 17.0833 14.3808 16.1012 15.0895 15.645C15.302 15.5075 15.4166 15.2692 15.4166 15.0158V8.75"
              stroke="#7096CD"
              stroke-width="2"
              stroke-linejoin="round"
            />
            <path
              d="M17.9166 9.99984V13.3332M2.08325 7.08317L9.99992 2.9165L17.9166 7.08317L9.99992 11.2498L2.08325 7.08317Z"
              stroke="#7096CD"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <span class="font-semibold">工作經歷</span>
        </div>

        <!-- content -->
        <div class="flex gap-6">
          <!-- bar -->
          <div class="flex flex-col items-center mt-[10px]">
            <div class="dot"></div>
            <div class="line"></div>
            <div class="dot"></div>
          </div>

          <!-- text -->
          <div class="flex flex-col gap-9 w-[220px]">
            <div class="flex flex-col text-left gap-[6px]">
              <p class="text-title">前端工程師 & UIUX 設計師</p>
              <div class="flex flex-col">
                <p class="text-location">誠諾工程技術股份有限公司</p>
                <p class="text-date">
                  <img src="@/assets/img/icon/calendar.svg" alt="calendar" />
                  2023.09 ~ 現職
                </p>
              </div>
            </div>

            <div class="flex flex-col text-left gap-[6px]">
              <p class="text-title">無線電維護士</p>
              <div class="flex flex-col">
                <p class="text-location">中華民國空軍</p>
                <p class="text-date">
                  <img src="@/assets/img/icon/calendar.svg" alt="calendar" />
                  2019.07 ~ 2023.02
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
.dot {
  @apply w-[10px] h-[10px] rounded-full;
  background-color: var(--blue);
}
.line {
  @apply w-[2px] h-[100px];
  background-color: var(--blue);
}

.text-title {
  @apply text-[18px] font-medium;
}

.text-location {
  @apply font-medium text-[14px];
  color: var(--blue-dark);
}

.text-date {
  @apply flex items-center gap-1 text-[14px];
  color: var(--blue-dark);
}
</style>
