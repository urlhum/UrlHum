@extends('layouts.app',  ['title' => trans('url.edit.short')])
@section('content')
    <div class="header bg-gradient-primary mb-3 pt-6 d-none d-lg-block d-md-block pt-md-7"></div>
    <div class="container-fluid col-lg-10 col-sm-12 m-auto">
        <div class="header-body">
            <div class="row">
                <div class="container-fluid">
                    <div class="col">
                        <div class="card shadow">
                            <div class="card-header d-flex justify-content-between">
                                <h1>{{ __('url.edit.short') }}
                                    <a href="/{{$data['url']->short_url}}">{{$data['url']->short_url}}</a>
                                </h1>
                                <form action="/url/{{$data['url']->short_url}}" method="POST" id="deleteUrl">
                                    @csrf
                                    <input type="hidden" name="_method" value="DELETE">
                                    <input type="submit" class="btn btn-danger" value="{{ __('url.delete.delete') }}"
                                           onclick="confirmDelete()">
                                </form>
                            </div>
                            <div class="card-body">
                                @if ($errors->any())

                                    <div class="alert alert-danger">
                                        <p>{{ __('urlhum.error') }}:</p>
                                        <ul>
                                            @foreach ($errors->all() as $error)

                                                <li>{{ $error }}</li>
                                            @endforeach

                                        </ul>
                                    </div>
                                @endif

                                @if(Session::has('success'))

                                    <div class="alert alert-success">
                                        <p>{{ Session::get('success') }}</p>
                                    </div>
                                @endif

                                <div class="d-flex justify-content-between">
                                    <p class="pull-left">
											<span class="badge badge-info">{{ __('url.created', ['date' => $data['url']->created_at]) }}</span>
                                    </p>
                                    <p class="pull-right">
											<span class="badge badge-light">{{ __('url.updated', ['date' => $data['url']->updated_at]) }}</span>
                                    </p>
                                </div>
                                <p>
                                    <span class="badge badge-default">{{ __('url.destination') }}</span> &nbsp;{{$data['url']->long_url}}
                                </p>
                                <p>
                                    <span class="badge badge-danger">{{ __('url.by') }}</span> &nbsp;
                                    @if($data['url']->user->email != "Anonymous")
                                        <a href="/user/{{$data['url']->user->id}}/edit">{{$data['url']->user->name}}</a> -
                                    @endif
                                    {{$data['url']->user->email}}
                                </p>
                                <a href="/{{$data['url']->short_url}}+" class="btn btn-success">
                                    <i class="fa fa-chart-bar"></i> {{ __('url.stats') }}
                                </a>

                                <button type="button" class="btn btn-info" id="qrModalButton" data-toggle="modal" data-target="#QRCodeModal">
                                    <i class="fa fa-qrcode"></i> {{ __('url.qrcode') }}
                                </button>
                                
                                <hr>

                                <div>
                                    <form method="POST" action="/url/{{$data['url']->short_url}}">
                                        @csrf
                                        <p>
                                            <a class="btn btn-primary" data-toggle="collapse" href="#retarget" role="button" aria-expanded="false">Retarget device <i class="ni ni-mobile-button"></i></a>
                                        </p>
                                        <div class="row mb-4">
                                            <div class="col">
                                                <div class="collapse multi-collapse" id="retarget">
                                                    <div class="card card-body">
                                                        @foreach ($data['targets'] as $device)
                                                            <div class="form-group">
                                                                <label class="text-left" style="float:left;">{{ $device->display_name }}</label>
                                                                <input type="url" class="form-control" name="{{ $device->name }}"
                                                                       placeholder="https://website.com" value="{{ $device->target_url }}">
                                                            </div>
                                                        @endforeach
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <input type="hidden" name="_method" value="PUT">
                                        <label class="text-left" for="privateUrl" style="float:left;">{{ __('url.options.hide') }}</label>
                                        <div class="form-group text-right" id="privateUrlcontainer">
                                            <label class="custom-toggle">
                                                <input type="hidden" name="privateUrl" value="0">
                                                <input type="checkbox" name="privateUrl" value="1"
                                                       @if ($data['url']->private == 1) checked @endif >
                                                <span class="custom-toggle-slider rounded-circle"></span>
                                            </label>
                                        </div>
                                        <label class="text-left" for="hideUrlStats" style="float:left;">{{ __('url.options.private_stats') }}</label>
                                        <div class="form-group text-right" id="hideUrlStatscontainer">
                                            <label class="custom-toggle">
                                                <input type="hidden" name="hideUrlStats" value="0">
                                                <input type="checkbox" name="hideUrlStats" value="1"
                                                       @if ($data['url']->hide_stats == 1) checked @endif>
                                                <span class="custom-toggle-slider rounded-circle"></span>
                                            </label>
                                        </div>
                                        <label class="text-left" for="customUrl" style="float:left;">{{ __('url.options.destination') }}</label>
                                        <div class="form-group" id="destinationUrlcontainer">
                                            <input type="url" class="form-control" id="destinationUrl"
                                                   name="url" value="{{$data['url']->long_url}}">
                                        </div>
                                        <button type="submit" class="btn btn-secondary">{{ __('urlhum.save') }}</button>
                                    </form>
                                </div>
                            </div>

                            @include('url.partials.qrcodemodal', ['url' => $data['url']])

                        </div>
                    </div>
                </div>
            </div>
            @include('layouts.footers.auth')
        </div>
    </div>


@endsection
@push('js')

    <script src="/js/app.js"></script>
    <script>
        $("#deleteUrl").submit(function (e) {
            if (confirm("{{ __('url.delete.confirm') }}")) {
                $("#deleteUrl")[0].submit();
            }
            e.preventDefault();
        });
    </script>

@endpush