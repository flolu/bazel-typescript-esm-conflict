import { Test } from "@nestjs/testing";
import { AppModule } from "./app.module.js";

describe("AppModule", () => {
  let appModule: AppModule;

  beforeEach(async () => {
    const testingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    appModule = testingModule.get(AppModule);
  });

  it("should compile the module", () => {
    expect(appModule).toBeDefined();
  });
});
