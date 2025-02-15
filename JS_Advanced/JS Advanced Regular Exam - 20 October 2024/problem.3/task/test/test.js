import { expect } from "chai";
import { streamingServiceSelector } from "../streamingServiceSelector.js";
import { describe } from "mocha";

describe(" streamingServiceSelector tests", function () {
  describe("•	selectingContent", function () {
    it("should return follwing messege if all input are valid", function () {
      expect(
        streamingServiceSelector.selectingContent("Movie", "Netflix", "Action")
      ).to.be.equal(
        "You can watch this Action Movie on Netflix. Enjoy your Action-filled experience!"
      );
    });

    it("should throw an error If the value of genre is not in the list of supported genres ([Action, Comedy, Drama, Thriller, Horror, Romance, Sci-Fi])", function () {
      expect(() =>
        streamingServiceSelector
          .selectingContent("Movie", "Netflix", "Acdef")
          .to.throw(
            "We currently support these genres: Action, Comedy, Drama, Thriller, Horror, Romance, Sci-Fi."
          )
      );
    });

    it("should throw an error if the value of type is different from Movie or TV Show", function () {
      expect(() =>
        streamingServiceSelector
          .selectingContent("Opera", "Netflix", "Comedy")
          .to.throw("We currently only support 'Movie' or 'TV Show' types.")
      );
    });

    it("should throw an error if all values is wrong", function () {
      expect(() =>
        streamingServiceSelector
          .selectingContent("Opera", "Chalga", "Wi-Fi")
          .to.throw("We currently only support 'Movie' or 'TV Show' types.")
      );
    });
  });

  //-------------next object property-----------

  describe("•	availablePlatforms", function () {
    it("should return current available platforms", function () {
      expect(
        streamingServiceSelector.availablePlatforms(
          ["Netflix", "HBO", "Disney+"],
          2
        )
      ).to.be.equal("Other available platforms are: Netflix, HBO.");
    });

    it("should throw an error if platforms parameter is not array", function () {
      expect(() =>
        streamingServiceSelector
          .availablePlatforms("Netflix", 2)
          .to.throw("Invalid platform selection.")
      );
    });

    it("should throw an error	if the selectedPlatformIndex is not a number and is outside the limits of the array", function () {
      expect(() =>
        streamingServiceSelector
          .availablePlatforms(["Netflix", "HBO", "Disney+"], 5)
          .to.throw("Invalid platform selection.")
      );
    });

    it("should throw an error	if the selectedPlatformIndex is not a number and is outside the limits of the array", function () {
      expect(() =>
        streamingServiceSelector
          .availablePlatforms(["Netflix", "HBO", "Disney+"], -1)
          .to.throw("Invalid platform selection.")
      );
    });

    it("should throw an error	if the selectedPlatformIndex is not a number and is outside the limits of the array", function () {
      expect(() =>
        streamingServiceSelector
          .availablePlatforms(["Netflix", "HBO", "Disney+"], "2")
          .to.throw("Invalid platform selection.")
      );
    });

    it("should throw an error	if the selectedPlatformIndex is not a number and is outside the limits of the array", function () {
      expect(() =>
        streamingServiceSelector
          .availablePlatforms("Netflix HBO Disney+", "2")
          .to.throw("Invalid platform selection.")
      );
    });

    it("should throw an error when platforms is not an array", () => {
      expect(() => streamingServiceSelector.availablePlatforms({}, 1)).to.throw(
        "Invalid platform selection."
      );
    });

    it("should throw an error when platforms is not an array", () => {
      expect(() =>
        streamingServiceSelector.availablePlatforms({}, "1")
      ).to.throw("Invalid platform selection.");
    });
  });

  //-----nex object property----

  describe("•	availablePlatforms", function () {
    it("should return current message", function () {
      expect(streamingServiceSelector.contentRating(90, 8.5)).to.be.equal(
        "This content is highly rated (8.5/10) and has a runtime of 1.50 hours. Enjoy your watch!"
      );
    });

    it("should return current message", function () {
      expect(streamingServiceSelector.contentRating(90, 6.3)).to.be.equal(
        "This content has a lower rating (6.3/10) and runs for 1.50 hours. You might want to check reviews first."
      );
    });

    it("should throw an error	if minutes is not a positive number", function () {
      expect(() =>
        streamingServiceSelector
          .contentRating(-10, 8)
          .to.throw("Invalid runtime or rating.")
      );
    });

    it("should throw an error	if minutes is not a number", function () {
      expect(() =>
        streamingServiceSelector
          .contentRating("-10", 8)
          .to.throw("Invalid runtime or rating.")
      );
    });

    it("should throw an error	if minutes is positive number and rating is less than 7", function () {
      expect(() =>
        streamingServiceSelector
          .contentRating(-10, 5)
          .to.throw("Invalid runtime or rating.")
      );
    });

    it("should throw an error	if minutes is string and rating is less than 7", function () {
      expect(() =>
        streamingServiceSelector
          .contentRating("-10", 4)
          .to.throw("Invalid runtime or rating.")
      );
    });
    //----
    it("should throw an error	if rating is not in positive number", function () {
      expect(() =>
        streamingServiceSelector
          .contentRating(100, -8)
          .to.throw("Invalid runtime or rating.")
      );
    });

    it("should throw an error	if rating is not a number", function () {
      expect(() =>
        streamingServiceSelector
          .contentRating(90, "8")
          .to.throw("Invalid runtime or rating.")
      );
    });

    it("should throw an error	if rating is positive number, but it is greater than 10", function () {
      expect(() =>
        streamingServiceSelector
          .contentRating(100, 11)
          .to.throw("Invalid runtime or rating.")
      );
    });
  });
});
