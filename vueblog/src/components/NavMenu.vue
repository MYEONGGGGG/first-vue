<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#"><router-link to="/">M I T</router-link></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">

          <!-- 메뉴바 #1. 유지보수 -->
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="menu1" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              유지보수
            </a>
            <ul class="dropdown-menu" aria-labelledby="menu1">
              <li><a class="dropdown-item" href="#"><router-link to="/menu1">근무일지 관리</router-link></a></li>
              <li><a class="dropdown-item" href="#">유지보수 관리</a></li>
              <li><hr class="dropdown-divider"></li>
              <li><a class="dropdown-item" href="#">원격유지보수</a></li>
            </ul>
          </li>

          <!-- 메뉴바 #2. 수정내역 -->
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="menu2" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              수정내역
            </a>
            <ul class="dropdown-menu" aria-labelledby="menu2">
              <li><a class="dropdown-item" href="#"><router-link to="/list">프로그램 수정 이력</router-link></a></li>
            </ul>
          </li>

          <!-- 메뉴바 #3. 환경설정 -->
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="menu3" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              환경설정
            </a>
            <ul class="dropdown-menu" aria-labelledby="menu3">
              <li><a class="dropdown-item" href="#">사용자 등록</a></li>
              <li><hr class="dropdown-divider"></li>
              <li><a class="dropdown-item" href="#">프로젝트 등록</a></li>
              <li><hr class="dropdown-divider"></li>
              <li><a class="dropdown-item" href="#">종료</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavMenu"
}
</script>

<style scoped>

</style>