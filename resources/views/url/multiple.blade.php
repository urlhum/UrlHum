@extends('layouts.app',  ['title' => trans('url.multiple.title')])
@section('content')
    <div class="header bg-gradient-primary mb-3 pt-6 	d-none d-lg-block d-md-block pt-md-7"></div>
    <div class="container-fluid col-lg-8 col-md-10 col-sm-12">
        <div class="card shadow">
            <div class="card-header border-0">
                <div class="row align-items-center">
                    <div class="col-8">
                        <h3 class="mb-0">{{ __('url.multiple.new') }}</h3>
                    </div>
                </div>
            </div>
            <form method="POST" action="/url/multiple">
                <div class="card-body">
                    @if (Session::has('errors'))
                        <div class="alert alert-danger">
                            <div class="alert-heading">{{ __('urlhum.error') }}</div>
                            <ul>
                                @foreach(Session::get('errors') as $error)
                                    <li>{{ $error }}</li>
                                @endforeach
                            </ul>
                        </div>
                    @endif

                    @if(Session::has('shortened'))
                        <div class="card">
                            <div class="card-header alert-success">{{ __('url.success') }}</div>
                            <div class="card-body">
                                <ul class="list-group list-group-flush">
                                    @foreach(Session::get('shortened') as $shortened)
                                        <li class="list-group-item text-black">
                                            <a href="/{{ $shortened }}">{{ Session::get('siteUrl') }}/{{ $shortened }}</a>
                                        </li>
                                    @endforeach
                                </ul>
                            </div>
                            <textarea class="d-none" id="generated-urls">
                                @foreach(Session::get('shortened') as $shortened)
                                    {{ Session::get('siteUrl') }}/{{ $shortened }}
                                @endforeach
                            </textarea>
                            <button class="btn btn-icon btn-primary mr-0" type="button" id="copy-generated-urls-btn">
                                <span class="btn-inner--icon"><i class="ni ni-single-copy-04"></i></span>
                                <span class="btn-inner--text">Copy all</span>
                            </button>
                            @if(! empty(Session::get('existing')))
                                <div class="card-footer">
                                    <div class="alert alert-info">
                                        Please note that {{ Session::get('existing') }} of these long URLs already
                                        existed, which have been shown above anyway.
                                    </div>
                                </div>
                            @endif
                        </div>

                        <p class="mt-3">You can bulk create other Short URLs below.</p>
                    @endif

                    <p>{{ __('url.multiple.description') }}</p>
                    <textarea name="urls" cols="30" rows="10"
                              class="form-control mt-3" required>{{ old('urls') }}</textarea>
                </div>
                <div class="card-footer">
                    <a class="btn btn-sm btn-secondary mt-2" id="options-toggle"><i
                                class="ni ni-settings-gear-65"></i>{{ __('url.options.options') }}
                    </a>

                    <div id="options-panel" class="mt-3" style="display:none;">
                        <label class="text-left" for="privateUrl"
                               style="float:left;">{{ __('url.options.hide') }}</label>
                        <div class="form-group text-right"
                             id="privateUrlcontainer">
                            <label class="custom-toggle">
                                <input type="hidden" name="privateUrl"
                                       value="0">
                                <input type="checkbox" name="privateUrl"
                                       value="1">
                                <span class="custom-toggle-slider rounded-circle"></span>
                            </label>
                        </div>
                        <label class="text-left" for="hideUrlStats"
                               style="float:left;">{{ __('url.options.private_stats') }}</label>
                        <div class="form-group text-right"
                             id="hideUrlStatscontainer">
                            <label class="custom-toggle">
                                <input type="hidden" name="hideUrlStats"
                                       value="0">
                                <input type="checkbox" name="hideUrlStats"
                                       value="1">
                                <span class="custom-toggle-slider rounded-circle"></span>
                            </label>
                        </div>
                    </div>
                    @csrf
                    <button type="submit" class="btn btn-primary mb-3 float-right">
                        Invia
                    </button>
            </form>
        </div>
    </div>
    @include('layouts.footers.auth')
    </div>
    </div>
@endsection
@push('js')
    <script src="/js/app.js"></script>
    <script>
        let textarea = document.getElementById('generated-urls');
        let button = document.getElementById('copy-generated-urls-btn');

        if (textarea !== null) {
            let text = textarea.innerHTML;
            text = text.replace(/(\r\n|\n|\r)/gm,"");
            text = text.replace(/ +/g, "\n").trim();
            button.addEventListener('click', function() {
                navigator.clipboard.writeText(text)
                    .then(text => {
                       button.innerHTML = 'Copied!';
                    })
                    .catch(err => {
                        alert("Error copying URLs. Please try again.");
                });
            });
        }

    </script>
@endpush