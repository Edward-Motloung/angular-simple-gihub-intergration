import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HelperService {
  @Output() $repos: EventEmitter<any> = new EventEmitter();
  @Output() $searchText: EventEmitter<string> = new EventEmitter();
  @Output() $clearText: EventEmitter<boolean> = new EventEmitter();

  constructor() { }

  setRepositories(repo: any) {
    this.$repos.emit(repo);
  }

  setSearchText(searchText: string) {
    this.$searchText.emit(searchText);
  }

  clearSearchText() {
    this.$clearText.emit(true);
  }
}
