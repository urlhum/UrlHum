<form method="POST" action="/url">
    <div class="row">
        <div class="col
            @if ($anonymous)
                anonymous-box-container
            @endif">

            <div class="card shadow
            @if ($anonymous)
                anonymous-create-box
            @endif">
                <div class="card-header border-0">
                    <div class="row align-items-center">
                        <div class="col-md-12">
                            @if ($errors->any())
                                <div class="alert alert-danger">
                                    <ul>
                                        @foreach ($errors->all() as $error)

                                            @if ($errors->has('customUrl'))
                                                <li>{{ __('url.existing_custom', ['url' => $error]) }}</li>
                                                @continue
                                            @endif

                                            <li>{{ $error }}</li>
                                        @endforeach
                                    </ul>
                                </div>
                            @endif

                            @if(Session::has('existing'))
                                <div class="alert alert-success">
                                    {{ __('url.existing_long') }}: <a
                                            href="/{{ Session::get('existing') }} "> {{ Session::get('siteUrl') }}/{{ Session::get('existing') }}</a>
                                </div>
                            @endif

                            @if(Session::has('success'))
                                <div class="alert alert-success">
                                    {{ __('url.success') }}: <a
                                            href="/{{ Session::get('success') }}"> {{ Session::get('siteUrl') }}/{{ Session::get('success') }}</a>
                                </div>
                            @endif



                            <h3 class="mb-0">{{ __('url.new_long_text') }}</h3>
                            <div class="input-group ml-2 mt-2">
                                @csrf
                                <input type="url" class="form-control" id="longUrl" name="url"
                                       placeholder="https://website.com" required>
                                <div class="input-group-append">
                                    <input type="submit" class="btn btn-primary">
                                </div>
                                @honeypot

                            </div>
                            <a class="btn btn-sm btn-secondary mt-2" id="options-toggle"><i
                                        class="ni ni-settings-gear-65"></i>{{ __('url.options.options') }}</a>

                            <div id="options-panel" class="card mt-3" style="display:none;">
                                <div class="card-body">
                                    <label class="text-left" for="customUrl" style="float:left;">{{ __('url.options.custom') }}</label>
                                    <p class="text-right" id="customUrlResult"></p>
                                    <div class="form-group" id="customUrlcontainer">
                                        <input type="text" class="form-control" id="customUrl" name="customUrl">
                                    </div>
                                    <br>
                                    <label class="text-left" for="privateUrl" style="float:left;">{{ __('url.options.hide') }}</label>
                                    <div class="form-group text-right" id="privateUrlcontainer">
                                        <label class="custom-toggle">
                                            <input type="hidden" name="privateUrl" value="0">
                                            <input type="checkbox" name="privateUrl" value="1">
                                            <span class="custom-toggle-slider rounded-circle"></span>
                                        </label>
                                    </div>
                                    <br>
                                    @if (Auth::check())
                                        <label class="text-left" for="hideUrlStats" style="float:left;">{{ __('url.options.private_stats') }}</label>
                                        <div class="form-group text-right" id="hideUrlStatscontainer">
                                            <label class="custom-toggle">
                                                <input type="hidden" name="hideUrlStats" value="0">
                                                <input type="checkbox" name="hideUrlStats" value="1">
                                                <span class="custom-toggle-slider rounded-circle"></span>
                                            </label>
                                        </div>
                                    @endif
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</form>