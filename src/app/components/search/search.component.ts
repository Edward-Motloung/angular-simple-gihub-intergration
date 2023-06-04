import { Component, Input, OnInit, Output } from '@angular/core';
import { GithubService } from 'src/app/services/github.service';
import { HelperService } from 'src/app/services/helper.service';

@Component({
  selector: 'tx-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  searchText: string = '';
  @Input() label: string = 'Search';

  constructor(private githubService: GithubService, private helperService: HelperService) { }

  ngOnInit(): void {
    this.helperService.$clearText.subscribe((clearText: boolean) => {
      if (clearText) {
        this.searchText = '';
      }
    })
  }

  captcherText(e: any) {
    this.helperService.setSearchText(e);
  }

}
