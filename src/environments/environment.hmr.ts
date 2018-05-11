import { StoreDevtoolsModule } from "@ngrx/store-devtools";

export const environment = {
    hmr: true,
    production: false,
    imports: [StoreDevtoolsModule.instrument({maxAge: 10})]
  };
  