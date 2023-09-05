import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GifsService {
  private _tagsHistory: string[] = [];
  private apiKey: string = '0ms2kIEJ7Vggv8iRnDrAz3vGJuaOHNsx';

  get tagsHistory(): string[] {
    return [...this._tagsHistory];
  }

  private organizeHistory(tag: string) {
    tag = tag.toLowerCase();
    if (this.tagsHistory.includes(tag)) {
      this._tagsHistory = this._tagsHistory.filter((oldTag) => oldTag !== tag);
    }
    this._tagsHistory.unshift(tag);
    this._tagsHistory = this.tagsHistory.splice(0,10)
  }

  async searchTag(tag: string) {
    if (tag.length === 0) { return }
    this.organizeHistory(tag);

    fetch('https://api.giphy.com/v1/gifs/search?api_key=0ms2kIEJ7Vggv8iRnDrAz3vGJuaOHNsx&q=Terraria&limit=10')
    .then(resp => resp.json())
    .then(data => console.log(data));
  }
}
