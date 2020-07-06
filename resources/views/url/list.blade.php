@extends('layouts.app',  ['title' => trans('url.list')])
@section('content')
    <div class="header bg-gradient-primary mb-3 pt-6 	d-none d-lg-block d-md-block pt-md-7"></div>
    <div class="container-fluid col-lg-10 col-md-10 col-sm-12 ">
        <div class="header-body">
            <div class="row">
                <div class="container-fluid">
                    <div class="col">
                        <div class="card shadow">
                            <div class="card-header">
                                <div class="row align-items-center">
                                    <div class="col-8">
                                        <h3 class="mb-0">{{ __('url.list') }}</h3>
                                    </div>
                                </div>
                            </div>
                            <div class="card-body">
                                <div class="table-responsive">
                                    <table class="table table-bordered align-items-center table-flush" id="table"
                                           width="100%">
                                        <thead class="thead-light">
                                        <tr>
                                            <th>{{ __('url.id') }}</th>
                                            <th>{{ __('url.long') }}</th>
                                            <th>{{ __('url.short') }}</th>
                                            <th>{{ __('account.user') }}</th>
                                            <th>{{ __('url.createdStr') }}</th>
                                            <th>{{ __('url.action') }}</th>
                                        </tr>
                                        </thead>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        @include('layouts.footers.auth')
    </div>


@endsection
@push('js')
    <script src="/js/app.js"></script>
    <script src="{{ asset('argon') }}/vendor/chart.js/dist/Chart.extension.js"></script>
    <script src="//cdn.datatables.net/1.10.19/js/jquery.dataTables.min.js"></script>
    <script src="https://cdn.datatables.net/responsive/2.2.3/js/dataTables.responsive.min.js"></script>
    <script src="https://cdn.datatables.net/1.10.18/js/dataTables.bootstrap4.min.js"></script>
    <script src="https://cdn.datatables.net/responsive/2.2.2/js/responsive.bootstrap4.min.js"></script>
    <link href="https://cdn.datatables.net/1.10.18/css/dataTables.bootstrap4.min.css" rel="stylesheet">
    <link href="https://cdn.datatables.net/responsive/2.2.2/css/responsive.bootstrap4.min.css" rel="stylesheet">
    <script>
        function getUrlVars()
        {
            let vars = {};
            let parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
                vars[key] = value;
            });
            return vars;
        }

        $(document).ready(function () {
            var table =  $('#table').DataTable({
                scrollX: true,
                processing: true,
                serverSide: true,
                oSearch: {"sSearch": getUrlVars()['q']},
                ajax: '{{ url('/url/list-load') }}',
                columns: [
                    {data: 'id', name: 'id'},
                    {data: 'long_url', name: 'long_url'},
                    {data: 'short_url', name: 'short_url'},
                    {data: 'user.email', name: 'user.email'},
                    {data: 'created_at', name: 'created_at'},
                    {data: 'action', name: 'action'}


                ],
                columnDefs: [{
                    targets: 1,
                    render: function (data, type, row) {
                        return data.length > 20 ?
                            data.substr(0, 20) + '[…]' :
                            data;
                    }
                },
                ],
                language: {
                    paginate: {
                        "previous": "&laquo;",
                        "next": "&raquo;",
                    }
                }
            });
        });


    </script>
    <style>
        #dataTableContainer,
        #dataTableContainer > tbody,
        #dataTableContainer > tbody > tr,
        #dataTableContainer > tbody > tr > td {
            display: block;
        }

        .btn-url-edit a {
            color: white;
        }
    </style>
@endpush