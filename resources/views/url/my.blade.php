@extends('layouts.app',  ['title' => trans('url.my.my')])
@section('content')
    <div class="header bg-gradient-primary mb-3 pt-6 	d-none d-lg-block d-md-block pt-md-7"></div>
    <div class="container-fluid col-lg-8 col-md-10 col-sm-12">
        <div class="header-body">
            <div class="card">
                <div class="row">
                    <div class="col">
                        <div class="card shadow">
                            <div class="card-header border-0">
                                <div class="row align-items-center">
                                    <div class="col-8">
                                        <h3 class="mb-0">{{ __('url.my.my') }}</h3>
                                    </div>
                                    <div class="col-4 text-right">
                                        <a href="{{ route('home') }}" class="btn btn-sm btn-primary">{{ __('url.new') }}</a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12">
                                @if( Session::has('success'))
                                    <div class="alert alert-success pb-0">
                                        <p class="text-center">{{ Session::get('success') }}</p>
                                    </div>
                                @endif

                                @if (session('status'))
                                    <div class="alert alert-success alert-dismissible fade show" role="alert">
                                        {{ session('status') }}

                                        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                @endif
                            </div>
                            <div class="table-responsive">
                                <table class="table align-items-center table-flush">
                                    <thead class="thead-light">
                                    <tr>
                                        <th scope="col">{{ __('url.short') }}</th>
                                        <th scope="col">{{ __('url.long') }}</th>
                                        <th scope="col"></th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    @foreach ($urls as $url)
                                        <tr>
                                            <td>
                                                <a href="/{{$url->short_url}}">{{$url->short_url}}</a>
                                            </td>
                                            <td>
                                                <a href="{{$url->long_url}}">{{$url->long_url}}</a>
                                            </td>
                                            <td class="text-right">
                                                <a href="/{{$url->short_url}}+">
                                                    <i class="fa fa-chart-bar fa-2x"></i>
                                                </a>
                                                <div class="dropdown">
                                                    <a class="btn btn-sm btn-icon-only text-light" href="#"
                                                       role="button" data-toggle="dropdown" aria-haspopup="true"
                                                       aria-expanded="false">
                                                        <i class="fas fa-ellipsis-v "></i>
                                                    </a>
                                                    <div class="dropdown-menu dropdown-menu-right dropdown-menu-arrow">
                                                        <form action="/url/{{$url->short_url}}" method="post">
                                                            @csrf
                                                            @method('delete')
                                                            <a class="dropdown-item"
                                                               href="/url/{{$url->short_url}}">{{ __('urlhum.edit') }}</a>
                                                            <button type="button" class="dropdown-item"
                                                                    onclick="confirm('{{ __("url.delete.confirm") }}') ? this.parentElement.submit() : ''">
                                                                {{ __('url.delete.delete') }}
                                                            </button>
                                                        </form>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    @endforeach
                                    </tbody>
                                </table>
                            </div>
                            <div class="card-footer py-4">
                                <nav class="d-flex justify-content-between" aria-label="...">
                                    <p class="pull-left">
                                        {{ __('url.my.list', [
                                            'firstItem' => $urls->firstItem(),
                                            'lastItem' => $urls->lastItem(),
                                            'num' => $urls->total()
                                        ]) }}
                                    </p>
                                    <div class="pull-right">
                                        {{ $urls->links() }}
                                    </div>
                                </nav>
                            </div>
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
@endpush