"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var socketComunicator_service_1 = require("./socketComunicator.service");
describe('SocketComunicatorService', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [socketComunicator_service_1.SocketComunicator]
        });
    });
    it('should be created', testing_1.inject([socketComunicator_service_1.SocketComunicator], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=socketComunicator.service.spec.js.map