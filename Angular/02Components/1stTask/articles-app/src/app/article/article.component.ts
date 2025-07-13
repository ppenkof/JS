import { Component } from '@angular/core';
import { Article} from './types';

@Component({
  selector: 'app-article',
  imports: [],
  templateUrl: './article.component.html',
  styleUrl: './article.component.css',
})
export class ArticleComponent {
  private symbols: number = 250;

  constructor() {
    this.articleDescLen = 0;
    this.descToShow = '';

    this.article = {
      author: '',
      title: '',
    }
    this.articleDesc = ''; 

  }

  @Input() article: Article;
  @Input() articleDesc: string;
  descToShow: string;
  articleDescLen: number;
  showReadMoreBtn: boolean = true;
  showHideBtn: boolean = false;
  imageIsShown: boolean = false;
  imageButtonTitle: string = 'Show Image';
}
