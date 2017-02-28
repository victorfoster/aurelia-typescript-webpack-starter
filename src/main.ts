import { Aurelia } from 'aurelia-framework';

export function configure(aurelia: Aurelia): void {
    aurelia.use
        .standardConfiguration()
        .plugin('aurelia-validation');

    aurelia.start().then(() => aurelia.setRoot('app'));
}
