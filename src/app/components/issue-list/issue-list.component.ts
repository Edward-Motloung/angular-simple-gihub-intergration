import { Component, OnInit, TemplateRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ChartOptions } from 'chart.js';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { GithubService } from 'src/app/services/github.service';
import { HelperService } from 'src/app/services/helper.service';

@Component({
  selector: 'tx-issue-list',
  templateUrl: './issue-list.component.html',
  styleUrls: ['./issue-list.component.scss']
})
export class IssueListComponent implements OnInit {

  repo: any = {};
  issues: any[] = [];
  searchText: string = '';
  modalRef?: BsModalRef;
  pieChartOptions: ChartOptions<'pie'> = {
    responsive: false,
  };
  pieChartLabels: any[] = [ 'Closed', 'Open' ];
  pieChartDatasets: any[] = [{ data: [ 0, 0 ]}];
  pieChartLegend: boolean = true;
  pieChartPlugins: any[] = [];
  state: string = 'all';

  constructor(private aRouter: ActivatedRoute,
    private route: Router,
    private github: GithubService,
    private helperService: HelperService,
    private modalService: BsModalService
    ) { }

  ngOnInit(): void {
    this.aRouter.params.subscribe((params: any) => {
      if (params.repo) {
        this.repo = JSON.parse(params.repo);
        this.getIssues(this.repo.full_name);
      } else {
        this.route.navigate(['/'])
      }
    });

    this.helperService.$searchText.subscribe((searchText: string) => {
      this.searchText = searchText;
    });
  }

  getIssues(fullname: string) {
    this.github.getIssues(fullname).subscribe((issues: any) => {
      this.issues = issues;
      issues.map((issue: any) => {
        if (issue.state === 'closed') {
          this.pieChartDatasets[0].data[0] += 1;
        } else if (issue.state === 'open') {
          this.pieChartDatasets[0].data[1] += 1;
        }
      })
    });
  }

  viewStats(modal: TemplateRef<any>) {
    this.modalRef = this.modalService.show(modal);
  }

  selectState(state: string) {
    this.state = state;
  }
}
