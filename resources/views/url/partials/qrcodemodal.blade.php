<div class="modal fade" id="QRCodeModal" tabindex="-1" role="dialog" aria-labelledby="qrCodeModal" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h1 class="modal-title" id="qrCodeModal">{{ __('url.qrcode_modal') }}</h1>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <div class="d-flex-columns p-2" >
                    <img class="w-100" src="{{ route('qrcode.svg', $url) }}">
                    <div class="d-flex">
                        <a class="flex-grow-1" href="{{ route('qrcode.svg', $url) }}">{{ __('url.qrcode_download') }} .svg</a>
                        <a class="flex-grow-1" href="{{ route('qrcode.png', $url) }}">{{ __('url.qrcode_download') }} .png</a>
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">{{ __('urlhum.close') }}</button>
            </div>
        </div>
    </div>
</div>