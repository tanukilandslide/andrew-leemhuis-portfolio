<template>
  <div class="bg-blue-100">
    <div class="nav-bar">
      <div class="content">
        <div class="nav-bar-content">
          <header>
            <a href="../index.html">
              <RouterLink to="/">
                <div class="logo">
                  <h1 class="logo-name">Andrew Leemhuis</h1>
                  <h2 class="logo-subtitle">UX Design Portfolio</h2>
                </div>
              </RouterLink>
            </a>
          </header>

          <nav>
            <ul class="navigation">
              <!-- <a href="index.html"><button><li class="nav-item">Projects</li></button></a> -->

              <a href="files/andrew-leemhuis-resume-a4.pdf" target="_blank"
                ><button><li class="nav-item">Resume</li></button></a
              >

              <a href="about/about.html"
                ><button>
                  <li class="nav-item"><RouterLink to="/about">About</RouterLink></li>
                </button></a
              >
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </div>

  <router-view></router-view>
</template>

<script setup></script>
