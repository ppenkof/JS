import { expect } from "chai";
import { describe } from "mocha";
import { homeGardener } from "../homeGardener.js";

describe("homeGardener tests", function() {
    describe("plantCareInstructions tests", function() {
        it("should return coresponding message", function() {
            expect(homeGardener.plantCareInstructions ("succulent")).to.be.equal(
                "Succulents require minimal watering, indirect sunlight, and well-draining soil.");
        });

        it("should return coresponding message", function() {
            expect(homeGardener.plantCareInstructions ("vegetable")).to.be.equal(
                "Vegetables need full sun, regular watering, and nutrient-rich soil.");
        });

        it("should return coresponding message", function() {
            expect(homeGardener.plantCareInstructions ("flowering")).to.be.equal(
                "Flowering plants require moderate watering, occasional fertilization, and pruning.");
        });

        it("should return coresponding message", function() {
            expect(homeGardener.plantCareInstructions ("tree")).to.be.equal(
                "Trees need deep watering, proper spacing, and regular mulching.");
        });

        //negative test cases
        it("should throw an error", function() {
            expect(()=>homeGardener.plantCareInstructions ("")).to.throw(
                "Invalid plant type!");
        });

        it("should throw an error", function() {
            expect(()=>homeGardener.plantCareInstructions ("perfect")).to.throw(
                "Invalid plant type!");
        });
        
        it("should throw an error", function() {
            expect(()=>homeGardener.plantCareInstructions (23)).to.throw(
                "Invalid plant type!");
        });
        it("should throw an error", function() {
            expect(()=>homeGardener.plantCareInstructions ({})).to.throw(
                "Invalid plant type!");
        });

        it("should throw an error", function() {
            expect(()=>homeGardener.plantCareInstructions (-5)).to.throw(
                "Invalid plant type!");
        });

        it("should throw an error", function() {
            expect(()=>homeGardener.plantCareInstructions ([])).to.throw(
                "Invalid plant type!");
        });
     });

    describe("availablePlants tests", function() {
        it("should return coresponding message", function() {
            expect(homeGardener.availablePlants([5,6,7,8],9)).to.be.equal(
                "There are 4 plants suitable for your garden height criteria!");
        });

        it("should return coresponding message", function() {
            expect(homeGardener.availablePlants([5,6,7,8],8)).to.be.equal(
                "There are 4 plants suitable for your garden height criteria!");
        });

        it("should return coresponding message", function() {
            expect(homeGardener.availablePlants([5,6,7,8],7)).to.be.equal(
                "There are 3 plants suitable for your garden height criteria!");
        });

        it("should return coresponding message", function() {
            expect(homeGardener.availablePlants([5,6,7,8],6)).to.be.equal(
                "There are 2 plants suitable for your garden height criteria!");
        });

        it("should return coresponding message", function() {
            expect(homeGardener.availablePlants([5,6,7,8],5)).to.be.equal(
                "There are 1 plants suitable for your garden height criteria!");
        });

        it("should return coresponding message", function() {
            expect(homeGardener.availablePlants([5,6,7,8],4)).to.be.equal(
                "There are 0 plants suitable for your garden height criteria!");
        });
        //negative test cases
        it("should throw an error", function() {
        expect(()=>homeGardener.availablePlants([5,6,7,8],'4')).to.throw(
            "Invalid Information!");
        });

        it("should throw an error", function() {
            expect(()=>homeGardener.availablePlants([5,6,7,8],0)).to.throw(
                "Invalid Information!");
            });

         it("should throw an error", function() {
        expect(()=>homeGardener.availablePlants([],1)).to.throw(
            "Invalid Information!");
        });

        it("should throw an error", function() {
            expect(()=>homeGardener.availablePlants([],'4')).to.throw(
                "Invalid Information!");
            });

         it("should throw an error", function() {
        expect(()=>homeGardener.availablePlants({},3)).to.throw(
            "Invalid Information!");
        });

        it("should throw an error", function() {
            expect(()=>homeGardener.availablePlants({},'3')).to.throw(
                "Invalid Information!");
            });

        it("should throw an error", function() {
        expect(()=>homeGardener.availablePlants({},0)).to.throw(
            "Invalid Information!");
        });

        it("should throw an error", function() {
            expect(()=>homeGardener.availablePlants("",0)).to.throw(
                "Invalid Information!");
            });
    });

    describe("gardenExpenses tests", function() {

        it("should return coresponding message", function() {
            expect(homeGardener.gardenExpenses(['shovel'],['vegetable seeds'],true)).to.be.equal(
                "You spent $27.00 on tools and seeds with a 10% discount!");
        });

        it("should return coresponding message", function() {
            expect(homeGardener.gardenExpenses(['shovel'],['flower seeds'],true)).to.be.equal(
                "You spent $29.70 on tools and seeds with a 10% discount!");
        });

        it("should return coresponding message", function() {
            expect(homeGardener.gardenExpenses(['shovel'],['herb seeds'],true)).to.be.equal(
                "You spent $25.20 on tools and seeds with a 10% discount!");
        });

        it("should return coresponding message", function() {
            expect(homeGardener.gardenExpenses(['rake'],['vegetable seeds'],true)).to.be.equal(
                "You spent $18.00 on tools and seeds with a 10% discount!");
        });

        it("should return coresponding message", function() {
            expect(homeGardener.gardenExpenses(['rake'],['flower seeds'],true)).to.be.equal(
                "You spent $20.70 on tools and seeds with a 10% discount!");
        });

        it("should return coresponding message", function() {
            expect(homeGardener.gardenExpenses(['rake'],['herb seeds'],true)).to.be.equal(
                "You spent $16.20 on tools and seeds with a 10% discount!");
        });

        it("should return coresponding message", function() {
            expect(homeGardener.gardenExpenses(['water can'],['vegetable seeds'],true)).to.be.equal(
                "You spent $4.50 on tools and seeds with a 10% discount!");
        });

        it("should return coresponding message", function() {
            expect(homeGardener.gardenExpenses(['water canl'],['flower seeds'],true)).to.be.equal(
                "You spent $7.20 on tools and seeds with a 10% discount!");
        });

        it("should return coresponding message", function() {
            expect(homeGardener.gardenExpenses(['water can'],['herb seeds'],true)).to.be.equal(
                "You spent $2.70 on tools and seeds with a 10% discount!");
        });

        //---------
        it("should return coresponding message", function() {
            expect(homeGardener.gardenExpenses(['shovel'],['vegetable seeds'],false)).to.be.equal(
                "You spent $30.00 on tools and seeds!");
        });

        it("should return coresponding message", function() {
            expect(homeGardener.gardenExpenses(['shovel'],['flower seeds'],false)).to.be.equal(
                "You spent $33.00 on tools and seeds!");
        });

        it("should return coresponding message", function() {
            expect(homeGardener.gardenExpenses(['shovel'],['herb seeds'],false)).to.be.equal(
                "You spent $28.00 on tools and seeds!");
        });

        it("should return coresponding message", function() {
            expect(homeGardener.gardenExpenses(['rake'],['vegetable seeds'],false)).to.be.equal(
                "You spent $20.00 on tools and seeds!");
        });

        it("should return coresponding message", function() {
            expect(homeGardener.gardenExpenses(['rake'],['flower seeds'],false)).to.be.equal(
                "You spent $23.00 on tools and seeds!");
        });

        it("should return coresponding message", function() {
            expect(homeGardener.gardenExpenses(['rake'],['herb seeds'],false)).to.be.equal(
                "You spent $18.00 on tools and seeds!");
        });

        it("should return coresponding message", function() {
            expect(homeGardener.gardenExpenses(['water can'],['vegetable seeds'],false)).to.be.equal(
                "You spent $5.00 on tools and seeds!");
        });

        it("should return coresponding message", function() {
            expect(homeGardener.gardenExpenses(['water canl'],['flower seeds'],false)).to.be.equal(
                "You spent $8.00 on tools and seeds!");
        });

        it("should return coresponding message", function() {
            expect(homeGardener.gardenExpenses(['water can'],['herb seeds'],false)).to.be.equal(
                "You spent $3.00 on tools and seeds!");
        });


        //negative test cases
        it("should throw an error", function() {
        expect(()=>homeGardener.gardenExpenses([5,6,7,8],'4',2)).to.throw(
            "Invalid Information!");
        });

        it("should throw an error", function() {
            expect(()=>homeGardener.gardenExpenses([],'4',{})).to.throw(
                "Invalid Information!");
        });

        it("should throw an error", function() {
            expect(()=>homeGardener.gardenExpenses("[5,6,7,8]",'4',true)).to.throw(
                "Invalid Information!");
        });

        it("should throw an error", function() {
            expect(()=>homeGardener.gardenExpenses({},{},false)).to.throw(
                "Invalid Information!");
            });

        

    });

});
