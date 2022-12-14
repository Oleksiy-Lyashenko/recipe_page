import dots from './assets/6dots.svg';
import headerImg from './assets/photo1.png';

import { BsClock } from 'react-icons/bs';
import { GiKnifeFork } from 'react-icons/gi';

function App() {
  return (
    <div className="page">
      <header className="header">
        <div className="wrapper">
          <div className="header__content">
            <h1 className="header__title">Classic Cheesecake Recipe</h1>

            <div className="header__text-block">
              <img src={dots} alt="" className="header__text-block__img" />

              <p className="header__text-block__text">
                Look no further for a creamy and ultra smooth classic cheesecake recipe! Paired with
                a buttery graham cracker crust, no one can deny its simple decadence. For the best
                results, bake in a water bath.
              </p>
            </div>

            <img src={headerImg} alt="" className="header__img" />
          </div>
        </div>
      </header>

      <div className="content">
        <div className="wrapper">
          <div className="content__body">
            <div className="time-block__item time-block__item--mobile">
              <GiKnifeFork size="28px" color="#F2994A" className="time-block__svg" />

              <div className="time-block__text-block">
                <p className="time-block__title">Yields</p>

                <p className="time-block__subtitle time-block__subtitle--orange">12 servings</p>
              </div>
            </div>

            <div className="time-block">
              <div className="time-block__item time-block__item--desktop">
                <GiKnifeFork size="28px" color="#F2994A" className="time-block__svg" />

                <div className="time-block__text-block">
                  <p className="time-block__title">Yields</p>

                  <p className="time-block__subtitle time-block__subtitle--orange">12 servings</p>
                </div>
              </div>

              <div className="time-block__item">
                <BsClock size="28px" className="time-block__svg" />

                <div className="time-block__text-block">
                  <p className="time-block__title">Prep TIme</p>

                  <p className="time-block__subtitle">45 minutes</p>
                </div>
              </div>

              <div className="time-block__item">
                <BsClock size="28px" className="time-block__svg" />

                <div className="time-block__text-block">
                  <p className="time-block__title">Cook Time</p>

                  <p className="time-block__subtitle">1 hour</p>
                </div>
              </div>

              <div className="time-block__item">
                <BsClock size="28px" className="time-block__svg" />

                <div className="time-block__text-block">
                  <p className="time-block__title">Total Time</p>

                  <p className="time-block__subtitle">7,75 hours</p>
                </div>
              </div>
            </div>

            <article className="ingredients">
              <h2 className="content__title">Ingredients</h2>

              <div className="ingredients__block">
                <h3 className="ingredients__subtitle">Graham Cracker Crust</h3>

                <ul className="ingredients__list">
                  <li className="ingredients__item">
                    <div className="ingredients__checkbox-block">
                      <input type="checkbox" name="" id="" className="ingredients__checkbox" />
                    </div>

                    <span className="ingredients__recipe">
                      1 and 1/2 cups (150g) graham cracker crumbs (about 10 full sheet graham
                      crackers)
                    </span>
                  </li>
                  <li className="ingredients__item">
                    <div className="ingredients__checkbox-block">
                      <input type="checkbox" name="" id="" className="ingredients__checkbox" />
                    </div>

                    <span className="ingredients__recipe">
                      5 Tablespoons (70g) unsalted butter, melted
                    </span>
                  </li>
                  <li className="ingredients__item">
                    <div className="ingredients__checkbox-block">
                      <input type="checkbox" name="" id="" className="ingredients__checkbox" />
                    </div>

                    <span className="ingredients__recipe">1/4 cup (50g) granulated sugar</span>
                  </li>
                </ul>
              </div>

              <div className="ingredients__block">
                <h3 className="ingredients__subtitle">Cheesecake</h3>

                <ul className="ingredients__list">
                  <li className="ingredients__item">
                    <div className="ingredients__checkbox-block">
                      <input type="checkbox" name="" id="" className="ingredients__checkbox" />
                    </div>

                    <span className="ingredients__recipe">
                      four 8-ounce blocks (904g) full-fat cream cheese, softened to room temperature
                    </span>
                  </li>
                  <li className="ingredients__item">
                    <div className="ingredients__checkbox-block">
                      <input type="checkbox" name="" id="" className="ingredients__checkbox" />
                    </div>

                    <span className="ingredients__recipe">1 cup (200g) granulated sugar</span>
                  </li>
                  <li className="ingredients__item">
                    <div className="ingredients__checkbox-block">
                      <input type="checkbox" name="" id="" className="ingredients__checkbox" />
                    </div>

                    <span className="ingredients__recipe">
                      1 cup (240g) full-fat sour cream, at room temperature
                    </span>
                  </li>
                  <li className="ingredients__item">
                    <div className="ingredients__checkbox-block">
                      <input type="checkbox" name="" id="" className="ingredients__checkbox" />
                    </div>

                    <span className="ingredients__recipe">1 teaspoon pure vanilla extract</span>
                  </li>
                  <li className="ingredients__item">
                    <div className="ingredients__checkbox-block">
                      <input type="checkbox" name="" id="" className="ingredients__checkbox" />
                    </div>

                    <span className="ingredients__recipe">
                      2 teaspoons fresh lemon juice (optional, but recommended)
                    </span>
                  </li>
                  <li className="ingredients__item">
                    <div className="ingredients__checkbox-block">
                      <input type="checkbox" name="" id="" className="ingredients__checkbox" />
                    </div>

                    <span className="ingredients__recipe">3 large eggs, at room temperature</span>
                  </li>
                  <li className="ingredients__item">
                    <div className="ingredients__checkbox-block">
                      <input type="checkbox" name="" id="" className="ingredients__checkbox" />
                    </div>

                    <span className="ingredients__recipe">
                      topping suggestions: salted caramel, lemon curd, strawberry topping, chocolate
                      ganache, red wine chocolate ganache, fresh fruit, whipped cream, or raspberry
                      sauce (recipe in notes)
                    </span>
                  </li>
                </ul>
              </div>
            </article>

            <article className="instructions">
              <h2 className="content__title content__title--instructions">Instructions</h2>

              <div className="instructions__text-block">
                <div className="instructions__number-block">
                  <div className="instructions__number">1</div>
                </div>

                <span className="instructions__text">
                  Adjust the oven rack to the lower-middle position and preheat oven to 350??F
                  (177??C).
                </span>
              </div>

              <div className="instructions__text-block">
                <div className="instructions__number-block">
                  <div className="instructions__number">2</div>
                </div>

                <span className="instructions__text">
                  Make the crust: Using a food processor, pulse the graham crackers into crumbs.
                  Pour into a medium bowl and stir in sugar and melted butter until combined. (You
                  can also pulse it all together in the food processor.) Mixture will be sandy.
                  Press firmly into the bottom and slightly up the sides of a 9-inch or 10-inch
                  springform pan. No need to grease the pan first. I use the bottom of a measuring
                  cup to pack the crust down tightly. Pre-bake for 8 minutes. Remove from the oven
                  and place the hot pan on a large piece of aluminum foil. The foil will wrap around
                  the pan for the water bath in step 4. Allow crust to slightly cool as you prepare
                  the filling.
                </span>
              </div>
              <div className="instructions__text-block">
                <div className="instructions__number-block">
                  <div className="instructions__number">3</div>
                </div>

                <span className="instructions__text">
                  Make the filling: Using a handheld or stand mixer fitted with a paddle attachment,
                  beat the cream cheese and granulated sugar together on medium-high speed in a
                  large bowl until the mixture is smooth and creamy, about 2 minutes. Add the sour
                  cream, vanilla extract, and lemon juice then beat until fully combined. On medium
                  speed, add the eggs one at a time, beating after each addition until just blended.
                  After the final egg is incorporated into the batter, stop mixing. To help prevent
                  the cheesecake from deflating and cracking as it cools, avoid over-mixing the
                  batter as best you can.
                </span>
              </div>
              <div className="instructions__text-block">
                <div className="instructions__number-block">
                  <div className="instructions__number">4</div>
                </div>

                <span className="instructions__text">
                  Prepare the simple water bath (see note) Boil a pot of water. You need 1 inch of
                  water in your roasting pan for the water bath, so make sure you boil enough. I use
                  an entire kettle of hot water. As the water is heating up, wrap the aluminum foil
                  around the springform pan. Pour the cheesecake batter on top of the crust. Use a
                  rubber spatula or spoon to smooth it into an even layer. Place the pan inside of a
                  large roasting pan. Carefully pour the hot water inside of the pan and place in
                  the oven. (Or you can place the roasting pan in the oven first, then pour the hot
                  water in. Whichever is easier for you.)
                </span>
              </div>
              <div className="instructions__text-block">
                <div className="instructions__number-block">
                  <div className="instructions__number">5</div>
                </div>

                <span className="instructions__text">
                  Bake cheesecake for 55-70 minutes or until the center is almost set. When it???s
                  done, the center of the cheesecake will slightly wobble if you gently shake the
                  pan. Turn the oven off and open the oven door slightly. Let the cheesecake sit in
                  the oven in the water bath as it cools down for 1 hour. Remove from the oven and
                  water bath, then cool cheesecake completely at room temperature. Then refrigerate
                  the cheesecake for at least 4 hours or overnight.
                </span>
              </div>
              <div className="instructions__text-block">
                <div className="instructions__number-block">
                  <div className="instructions__number">6</div>
                </div>

                <span className="instructions__text">
                  Use a knife to loosen the chilled cheesecake from the rim of the springform pan,
                  then remove the rim. Using a clean sharp knife, cut into slices for serving. For
                  neat slices, wipe the knife clean and dip into warm water between each slice.
                </span>
              </div>
              <div className="instructions__text-block">
                <div className="instructions__number-block">
                  <div className="instructions__number">7</div>
                </div>

                <span className="instructions__text">
                  Serve cheesecake with desired toppings. Cover and store leftover cheesecake in the
                  refrigerator for up to 5 days.
                </span>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
