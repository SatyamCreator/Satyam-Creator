
    // Get the element by its ID
    var exampleElement = document.getElementById('navbar');

    // Update the inner HTML
    exampleElement.innerHTML = `
    <style>
    .modeswitch svg , .dropdown-menu svg{
        width: 10px;
        height: 20px;
    }
</style>
    <nav class="navbar navbar-expand-lg bg-body-tertiary shadow-sm">
  <div class="container">
    
    <button class="navbar-toggler border-0 shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="d-flex align-items-center pe-lg-3 pe-0"> 
    <a class="navbar-brand fw-bold" href="index.html">Text Decoration</a>
    <div class=" dropdown me-2 d-lg-none d-block">
    <!-- Switch button -->
    <button class="modeswitch btn btn-light btn-sm rounded-btn dropdown-toggle mx-auto p-1" id="theme-mode-btn" type="button" aria-expanded="false" data-bs-toggle="dropdown" data-bs-display="static">
      <svg class=" theme-mode-icon-active"><use href="#"><i class="ri-sun-fill"></i></use></svg>
    
    </button>
    <!-- Dropdown items -->
    <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="theme-mode-btn">
      <li class="mb-1">
        <button type="button" class="dropdown-item d-flex align-items-center" data-bs-theme-value="light">
          <svg class="theme-mode-switch me-2"><use href="#"><i class="ri-sun-fill"></i></use></svg>Light
        </button>
      </li>
      <li class="mb-1">
        <button type="button" class="dropdown-item d-flex align-items-center" data-bs-theme-value="dark">
          <svg class=" theme-mode-switch me-2"><use href="#"><i class="ri-moon-fill"></i></use></svg>Dark
        </button>
      </li>
      <li>
        <button type="button" class="dropdown-item d-flex align-items-center" data-bs-theme-value="auto">
          <svg class=" theme-mode-switch me-2"><use href="#"><i class="ri-sun-line"></i></use></svg>Auto
        </button>
      </li>
    </ul>
 </div>
    </div>
   
    <div class="d-flex w-100 w-lg-50 justify-content-center" role="search">
    
    <input class="form-control me-2 w-100 rounded-pill" type="search" placeholder="Search" aria-label="Search">

  </div>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item px-2">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item px-2">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item dropdown px-2">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>


        <li class="nav-item dropdown px-2 d-none d-lg-block">
        <!-- Switch button -->
        <button class="modeswitch btn btn-light  rounded-btn dropdown-toggle mx-auto" id="theme-mode-btn" type="button" aria-expanded="false" data-bs-toggle="dropdown" data-bs-display="static">
          <svg class=" theme-mode-icon-active"><use href="#"><i class="ri-sun-fill"></i></use></svg>
        
        </button>
        <!-- Dropdown items -->
        <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="theme-mode-btn">
          <li class="mb-1">
            <button type="button" class="dropdown-item d-flex align-items-center" data-bs-theme-value="light">
              <svg class="theme-mode-switch me-2"><use href="#"><i class="ri-sun-fill"></i></use></svg>Light
            </button>
          </li>
          <li class="mb-1">
            <button type="button" class="dropdown-item d-flex align-items-center" data-bs-theme-value="dark">
              <svg class=" theme-mode-switch me-2"><use href="#"><i class="ri-moon-fill"></i></use></svg>Dark
            </button>
          </li>
          <li>
            <button type="button" class="dropdown-item d-flex align-items-center" data-bs-theme-value="auto">
              <svg class=" theme-mode-switch me-2"><use href="#"><i class="ri-sun-line"></i></use></svg>Auto
            </button>
          </li>
        </ul>
     </li>


      </ul>
    
    </div>
  </div>
</nav>
    `;
