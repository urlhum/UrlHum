<div class="row align-items-center justify-content-xl-between">
    <div class="col-xl-6">
        <div class="copyright text-center text-xl-left text-muted">
            &copy; {{ now()->year }} <a href="{{ url('/') }}" class="font-weight-bold ml-1" target="_blank">{{ setting('website_name') }}</a> -
            {{ __('urlhum.design_by') }} <a href="https://www.creative-tim.com">Creative Tim</a>
        </div>

    </div>
    <div class="col-xl-6">
        <ul class="nav nav-footer justify-content-center justify-content-xl-end">
            @if ( setting('show_guests_latests_urls'))
                <li class="nav-item">
                    <a href="{{ route('url.public') }}" class="nav-link" target="_blank">{{ __('url.latest') }}</a>
                </li>
            @endif

            @if ( setting('enable_privacy_policy'))
                <li class="nav-item">
                    <a href="{{ route('privacy') }}" class="nav-link" target="_blank">{{ __('urlhum.privacypolicy') }}</a>
                </li>
            @endif


            @if ( setting('enable_terms_of_use'))
                <li class="nav-item">
                    <a href="{{ route('tos') }}" class="nav-link" target="_blank">{{ __('urlhum.termsofuse') }}</a>
                </li>
            @endif
        </ul>
    </div>
</div>