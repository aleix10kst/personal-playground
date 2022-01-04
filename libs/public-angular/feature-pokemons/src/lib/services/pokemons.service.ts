import { Injectable } from '@angular/core';
import {
  PokeApiService,
  PokeApiResponse,
  Pokemon,
} from '@personal-playground/public-angular/data-access';
import {
  distinctUntilChanged,
  map,
  Observable,
  pluck,
  share,
  startWith,
  Subject,
  switchMap,
  withLatestFrom,
} from 'rxjs';

type FetchPageDirection = 'next' | 'previous';

@Injectable({
  providedIn: 'root',
})
export class PokemonsService {
  private readonly fetchLinkSubject: Subject<string> = new Subject<string>();
  private readonly fetchLink$ = this.fetchLinkSubject.asObservable();

  private readonly response$: Observable<PokeApiResponse<Pokemon>> =
    this.fetchLink$.pipe(
      switchMap((link) => this.pokeApiService.getPokemons(link)),
      share()
    );

  readonly pokemons$: Observable<Pokemon[]> = this.response$.pipe(
    pluck('results')
  );

  readonly nextLink$: Observable<string> = this.response$.pipe(
    pluck('next'),
    distinctUntilChanged()
  );
  readonly previousLink: Observable<string> = this.response$.pipe(
    pluck('previous'),
    distinctUntilChanged()
  );

  readonly count$: Observable<number> = this.response$.pipe(
    pluck('count'),
    distinctUntilChanged()
  );

  private readonly pageSubject: Subject<FetchPageDirection> =
    new Subject<FetchPageDirection>();

  private readonly pageChanges$: Observable<string> = this.pageSubject
    .asObservable()
    .pipe(
      withLatestFrom(this.response$),
      map(([type, response]) =>
        type === 'next' ? response.next : response.previous
      )
    );

  constructor(private readonly pokeApiService: PokeApiService) {
    this.pageChanges$.subscribe(this.fetchLinkSubject);
  }

  initializePokemons(): void {
    this.fetchLinkSubject.next('');
  }

  fetchNewPage(direction: FetchPageDirection): void {
    this.pageSubject.next(direction);
  }
}
