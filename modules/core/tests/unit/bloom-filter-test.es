/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

/* global chai, describeModule */

const expect = chai.expect;

export default describeModule(
  "core/bloom-filter",
  () => ({}),
  () => {
    describe("BloomFilter", function () {
      let BloomFilter;

      beforeEach(function () {
        BloomFilter = this.module().default;
      });

      it("should pass simple testSingle tests", function () {
        const uut = new BloomFilter(new Array(101), 7);

        expect(uut.testSingle("x")).to.be.false;
        expect(uut.testSingle("y")).to.be.false;

        uut.addSingle("x");
        expect(uut.testSingle("x")).to.be.true;
        expect(uut.testSingle("y")).to.be.false;

        uut.addSingle("y");
        expect(uut.testSingle("x")).to.be.true;
        expect(uut.testSingle("y")).to.be.true;
      });
    });
  },
);
