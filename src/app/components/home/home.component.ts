import { Component, OnInit, TemplateRef } from '@angular/core';
import { HelperService } from 'src/app/services/helper.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Router } from '@angular/router';
import { GithubService } from 'src/app/services/github.service';

@Component({
  selector: 'tx-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  modalRef?: BsModalRef;
  repos: any = null;
  selectedRepo: any = null;
  searchText: string = '';

  constructor(private helperService: HelperService, private modalService: BsModalService, private route: Router, private githubService: GithubService) { }

  ngOnInit(): void {
    this.helperService.$repos.subscribe(repos => this.repos = repos);
    this.helperService.$searchText.subscribe((searchText: string) => {
      this.searchText = searchText;
    });

    document.addEventListener('keyup', (e) => {
      if (e.code === 'Enter')  {
        if (this.searchText) {
          this.search(this.searchText);
        }
      }
    });
  }

  showRepoDetails(modal: TemplateRef<any>, repo: any): void {
    this.modalRef = this.modalService.show(modal);
    this.selectedRepo = repo;
  }

  goToIssues(selectedRepo: any): void {
    this.modalRef?.hide();
    this.route.navigate(['/issues', {repo: JSON.stringify(selectedRepo)}]);
  }

  search(term: string): void {
    if(!term) return;
    this.githubService.getRepositories(term).subscribe((repos) => {
      this.helperService.setRepositories(repos);
    })
  }

  clear() {
    this.helperService.clearSearchText();
    this.repos = null;
  }
}
