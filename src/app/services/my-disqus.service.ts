import { Inject, Injectable } from '@angular/core';
import { DISQUS_SHORTNAME, DisqusService } from 'ngx-disqus';

@Injectable()
export class MyDisqusService {

  constructor(
    private disqusService: DisqusService,
    @Inject(DISQUS_SHORTNAME) private shortname: string
  ) {
    this.disqusService.shortname = this.shortname;
  }
}
