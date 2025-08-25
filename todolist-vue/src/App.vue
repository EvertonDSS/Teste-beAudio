<template>
  
  <div id="app">
    <nav class="navbar navbar-expand bg-light shadow-sm">
      <div class="container">
        <router-link class="navbar-brand fw-bold" to="/">
          Task List
        </router-link>

        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <router-link
                class="nav-link"
                active-class="active fw-bold text-primary"
                to="/"
              >
                <i class="bi bi-list-check me-1"></i> Lista de Tarefas
              </router-link>
            </li>
           
          </ul>
        </div>
      </div>
    </nav>

    <div class="container">
      <router-view />
    </div>
    <div id="toast-container" class="toast-container position-fixed bottom-0 end-0 p-3"></div>

  </div>
  
  
</template>

