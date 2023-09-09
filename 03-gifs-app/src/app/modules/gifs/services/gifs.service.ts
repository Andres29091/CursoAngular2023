import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchReponse } from '../interfaces/gifs.interfaces';

@Injectable({
  providedIn: 'root'
})
export class GifsService {
  public gifList: Gif[] = [];

  private _tagsHistory: string[] = [];
  private _apiKey: string = '0ms2kIEJ7Vggv8iRnDrAz3vGJuaOHNsx';
  private _serviceUrl: string = 'https://api.giphy.com/v1/gifs';
  private _tag: string = ''
  private _limit: string = '10'

  constructor(
    private _httpClient: HttpClient
  ) {
    this.loadLocalStorage();
  }

  get getTagsHistory(): string[] {
    return [...this._tagsHistory];
  }

  set setTagSearch(tag: string) {
    this._tag = tag
  }

  get getTag(): string {
    return this._tag
  }

  set setLimit(limit: string) {
    this._limit = limit;
  }

  get getLimit(): number {
    return parseInt(this._limit);
  }

  private organizeHistory(tag: string) {
    tag = tag.toLowerCase();
    if (this.getTagsHistory.includes(tag)) {
      this._tagsHistory = this._tagsHistory.filter((oldTag) => oldTag !== tag);
    }
    this._tagsHistory.unshift(tag);
    this._tagsHistory = this.getTagsHistory.splice(0, 10)
    this.saveLocalStorage();
  }

  searchTag(tag: string) {
    if (tag.length === 0) { return }
    this.organizeHistory(tag);

    const params = new HttpParams()
      .set('api_key', this._apiKey)
      .set('limit', this.getLimit)
      .set('q', tag)

    this._httpClient.get<SearchReponse>(`${this._serviceUrl}/search`, { params })
      .subscribe(resp => {
        this.gifList = resp.data;
      });
  }

  private saveLocalStorage(): void {
    localStorage.setItem('history', JSON.stringify(this._tagsHistory))
  }

  private loadLocalStorage(): void {
    if (!localStorage.getItem('history')) return;
    this._tagsHistory = JSON.parse(localStorage.getItem('history')!);
    if (this._tagsHistory.length === 0) return;
    let tag = this._tagsHistory[0]
    this.searchTag(tag);
    this.setTagSearch = tag;
  }

  public deleteLocalStorage() {
    localStorage.removeItem('history');
    this._tagsHistory = [];
  }
}
