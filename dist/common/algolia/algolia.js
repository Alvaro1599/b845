"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Algolia = void 0;
const algoliasearch_1 = __importDefault(require("algoliasearch"));
const errorModel_1 = require("../error/errorModel");
class Algolia {
    static formatCompany(company) {
        return {
            objectID: company.id,
            website: company.website,
            name: company.name,
        };
    }
    static createCompany(company) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield Algolia.index.saveObject(Algolia.formatCompany(company));
            }
            catch (error) {
                throw new errorModel_1.ErrorService(400, "No se pudo crear el objeto en algolia");
            }
        });
    }
    static updateCompany(company) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield Algolia.index.partialUpdateObject(Algolia.formatCompany(company));
            }
            catch (error) {
                console.log(error);
                throw new errorModel_1.ErrorService(400, "No se pudo actualizar el objeto en algolia");
            }
        });
    }
    static deleteCompany(company) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { password, review } = company, data = __rest(company, ["password", "review"]);
                return yield Algolia.index.delete(Algolia.formatCompany(company));
            }
            catch (error) {
                throw new errorModel_1.ErrorService(400, "No se pudo eliminar el objeto en algolia");
            }
        });
    }
}
exports.Algolia = Algolia;
Algolia.instance = (0, algoliasearch_1.default)(process.env.ALGOLIAID, process.env.ALGOLIAKEY);
Algolia.index = Algolia.instance.initIndex("companiesSearch");
/*
(
    
    async ()=>{
        await AppDataSource.initialize()
    const data=await new CompanyService().findAll()
    try {
        await Algolia.index.saveObjects(data.map((x)=>Algolia.formatCompany(x)))
    console.log("listo");
    } catch (error) {
    console.log(error);
    }
    }
)()
 */ 
//# sourceMappingURL=algolia.js.map