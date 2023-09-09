import { Component } from '@angular/core';
import { GifsService } from 'src/app/modules/gifs/services/gifs.service';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  constructor(
    private _gifsService: GifsService
  ) { }

  get getTags(): string[] {
    return this._gifsService.getTagsHistory;
  }

  set setTagSearch(tag: string) {
    this._gifsService.setTagSearch = tag
  }

  historySearch(tag: string) {
    this._gifsService.searchTag(tag);
  }

  clearHistory() {
    this._gifsService.deleteLocalStorage();
  }
}
