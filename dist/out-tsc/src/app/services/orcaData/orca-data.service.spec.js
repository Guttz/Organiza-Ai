"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var orca_data_service_1 = require("./orca-data.service");
describe('OrcaDataService', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [orca_data_service_1.OrcaDataService]
        });
    });
    it('should be created', testing_1.inject([orca_data_service_1.OrcaDataService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=orca-data.service.spec.js.map