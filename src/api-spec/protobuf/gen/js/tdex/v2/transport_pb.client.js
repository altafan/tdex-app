/* eslint-disable */
// @generated by protobuf-ts 2.9.0 with parameter add_pb_suffix,eslint_disable,ts_nocheck,long_type_string,output_javascript
// @generated from protobuf file "tdex/v2/transport.proto" (package "tdex.v2", syntax proto3)
// tslint:disable
// @ts-nocheck
import { TransportService } from "./transport_pb";
import { stackIntercept } from "@protobuf-ts/runtime-rpc";
/**
 * TransportService is used by a Liquidity provider to announce the accepted
 * content types of incoming HTTP request messages.
 *
 * @generated from protobuf service tdex.v2.TransportService
 */
export class TransportServiceClient {
    constructor(_transport) {
        this._transport = _transport;
        this.typeName = TransportService.typeName;
        this.methods = TransportService.methods;
        this.options = TransportService.options;
    }
    /**
     * @generated from protobuf rpc: SupportedContentTypes(tdex.v2.SupportedContentTypesRequest) returns (tdex.v2.SupportedContentTypesResponse);
     */
    supportedContentTypes(input, options) {
        const method = this.methods[0], opt = this._transport.mergeOptions(options);
        return stackIntercept("unary", this._transport, method, opt, input);
    }
}