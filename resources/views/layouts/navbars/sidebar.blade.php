<nav class="navbar navbar-vertical fixed-left navbar-expand-md navbar-light bg-white" id="sidenav-main">
    <div class="container-fluid">
        <!-- Toggler -->
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#sidenav-collapse-main" aria-controls="sidenav-main" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <!-- Brand -->
        <a class="navbar-brand pt-0" href="{{ route('home') }}">
            <img src="{{ setting('website_image') }}" class="navbar-brand-img" alt="...">
        </a>
        <!-- User -->
        <ul class="nav align-items-center d-md-none">
            <li class="nav-item dropdown">
                <a class="nav-link" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i class="fa fa-user"></i>
                </a>
                <div class="dropdown-menu dropdown-menu-arrow dropdown-menu-right">
                    <div class=" dropdown-header noti-title">
                        <h6 class="text-overflow m-0">{{ __('urlhum.welcome') }}</h6>
                    </div>
                    <a href="{{ route('profile.edit') }}" class="dropdown-item">
                        <i class="ni ni-single-02"></i>
                        <span>{{ __('urlhum.account') }}</span>
                    </a>
                    <a href="{{ route('url.my') }}" class="dropdown-item">
                        <i class="fa fa-list-alt"></i>
                        <span>{{ __('url.my.my') }}</span>
                    </a>
                    <div class="dropdown-divider"></div>
                    <a href="{{ route('logout') }}" class="dropdown-item" onclick="event.preventDefault();
                    document.getElementById('logout-form').submit();">
                        <i class="ni ni-user-run"></i>
                        <span>{{ __('urlhum.logout') }}</span>
                    </a>
                </div>
            </li>
        </ul>
        <!-- Collapse -->
        <div class="collapse navbar-collapse" id="sidenav-collapse-main">
            <!-- Collapse header -->
            <div class="navbar-collapse-header d-md-none">
                <div class="row">
                    <div class="col-6 collapse-brand">
                        <a href="{{ route('home') }}">
                            <img src="{{ setting('website_image') }}">
                        </a>
                    </div>
                    <div class="col-6 collapse-close">
                        <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#sidenav-collapse-main" aria-controls="sidenav-main" aria-expanded="false" aria-label="Toggle sidenav">
                            <span></span>
                            <span></span>
                        </button>
                    </div>
                </div>
            </div>
            @if ( isAdmin() )
            <!-- Form -->
            <form class="mt-4 mb-3 d-md-none" method="GET" action="{{ route('url.list') }}">
                <div class="input-group input-group-rounded input-group-merge">
                    <input type="search" name="q" class="form-control form-control-rounded form-control-prepended" placeholder="{{ __('urlhum.search') }}" aria-label="Search">
                    <div class="input-group-prepend">
                        <div class="input-group-text">
                            <span class="fa fa-search"></span>
                        </div>
                    </div>
                </div>
            </form>
            @endif
            <!-- Navigation -->
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link" href="{{ route('home') }}">
                        <i class="ni ni-tv-2 text-primary"></i> {{ __('urlhum.home') }}
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="{{ route('profile.edit') }}">
                        <i class="ni ni-single-02 text-yellow"></i> {{ __('urlhum.account') }}
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="{{ route('url.my') }}">
                        <i class="fa fa-th-list text-blue"></i> {{ __('url.my.my') }}
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="{{ route('url.public')}} ">
                        <i class="fa fa-clock text-blue"></i> {{ __('url.public') }}
                    </a>
                </li>

            </ul>

            @if (isAdmin())
            <hr class="my-3">
            <h6 class="navbar-heading text-muted">Admin</h6>

            <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link" href="{{ route('url.list') }}">
                        <i class="fa fa-stream text-green"></i> {{ __('url.list') }}
                    </a>
                </li>

                @if (!setting('disable_referers'))
                <li class="nav-item">
                    <a class="nav-link" href="{{ route('url.referers')}} ">
                        <i class="fa fa-hand-point-up text-purple"></i> {{ __('analytics.referer.referers') }}
                    </a>
                </li>
                @endif

                <li class="nav-item">
                    <a class="nav-link" href="{{ route('user.index')}} ">
                        <i class="fa fa-users text-orange"></i> {{ __('urlhum.users') }}
                    </a>
                </li>

                <li class="nav-item">
                    <a class="nav-link" href="{{ route('settings') }}">
                        <i class="ni ni-settings text-red"></i> {{ __('settings.settings') }}
                    </a>
                </li>

            </ul>
            @endif

        </div>
    </div>
</nav>