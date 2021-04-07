/* eslint-disable no-console */

// export into controllers later?
import express from "express";
import sequelize from "sequelize";

import db from "../database/initializeDB.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Welcome to the AAPI Art Corner API!");
});

/// /////////////////////////////////
/// ////Media Endpoints////////
/// /////////////////////////////////
router
  .route("/media")
  .get(async (req, res) => {
    try {
      const media = await db.all_media.findAll();
      const reply =
        media.length > 0 ? { data: media } : { message: "no results found" };
      res.json(reply);
    } catch (err) {
      console.error(err);
      res.error("Server error");
    }
  })
  .post(async (req, res) => {
    const media = await db.all_media.findAll();
    const currentId = (await media.length) + 1;
    try {
      const newMedia = await db.all_media.create({
        media_id: currentId,
        media_title: req.body.media_title,
        media_type: req.body.media_type,
        media_release_year: req.body.media_release_year,
        media_description: req.body.media_description,
        media_duration: req.body.media_duration,
        album_songs_number: req.body.album_songs_number,
        television_seasons_number: req.body.television_seasons_number,
        audience_rating: req.body.audience_rating,
        show_still_airing: req.body.show_still_airing
      });
      res.json(newMedia);
    } catch (err) {
      console.error(err);
      res.error("Server error");
    }
  })
  .put(async (req, res) => {
    try {
      await db.all_media.update(
        {
          media_title: req.body.media_title,
          media_type: req.body.media_type,
          media_release_year: req.body.media_release_year,
          media_description: req.body.media_description,
          media_duration: req.body.media_duration,
          album_songs_number: req.body.album_songs_number,
          television_seasons_number: req.body.television_seasons_number,
          audience_rating: req.body.audience_rating,
          show_still_airing: req.body.show_still_airing
        },
        {
          where: {
            media_id: req.body.media_id
          }
        }
      );
      res.send("Successfully Updated");
    } catch (err) {
      console.error(err);
      res.error("Server error");
    }
  })
  .delete((req, res) => {
    res.send("Action unavailable");
  });

/// /////////////////////////////////
/// ////Creators Endpoints////////
/// /////////////////////////////////

router
  .route("/creators")
  .get(async (req, res) => {
    try {
      const creators = await db.creators.findAll();
      const reply =
        creators.length > 0
          ? { data: creators }
          : { message: "no results found" };
      res.json(reply);
    } catch (err) {
      console.error(err);
      res.error("Server error");
    }
  })
  .post(async (req, res) => {
    const creators = await db.creators.findAll();
    const currentId = (await creeators.length) + 1;
    try {
      const newCreator = await db.creators.create({
        creator_id: currentId,
        creator_first_name: req.body.creator_first_name,
        creator_last_name: req.body.creator_last_name,
        creator_current_state: req.body.creator_current_state,
        creator_home_state: req.body.creator_home_state,
        creator_country: req.body.creator_country
      });
      res.json(newCreator);
    } catch (err) {
      console.error(err);
      res.error("Server error");
    }
  })
  .put(async (req, res) => {
    try {
      await db.creators.update(
        {
          creator_first_name: req.body.creator_first_name,
          creator_last_name: req.body.creator_last_name,
          creator_current_state: req.body.creator_current_state,
          creator_home_state: req.body.creator_home_state,
          creator_country: req.body.creator_country
        },
        {
          where: {
            creator_id: req.body.creator_id
          }
        }
      );
      res.send("Successfully Updated");
    } catch (err) {
      console.error(err);
      res.error("Server error");
    }
  })
  .delete((req, res) => {
    res.send("Action unavailable");
  });

/// /////////////////////////////////
/// ////Creators Endpoints////////
/// /////////////////////////////////
/** 
router
  .route("/creators")
  .get(async (req, res) => {
    try {
      const creators = await db.creators.findAll();
      const reply =
        creators.length > 0
          ? { data: creators }
          : { message: "no results found" };
      res.json(reply);
    } catch (err) {
      console.error(err);
      res.error("Server error");
    }
  })
  .post(async (req, res) => {
    const creators = await db.creators.findAll();
    const currentId = (await creeators.length) + 1;
    try {
      const newCreator = await db.creators.create({
        creator_id: currentId,
        creator_first_name: req.body.creator_first_name,
        creator_last_name: req.body.creator_last_name,
        creator_current_state: req.body.creator_current_state,
        creator_home_state: req.body.creator_home_state,
        creator_country: req.body.creator_country
      });
      res.json(newCreator);
    } catch (err) {
      console.error(err);
      res.error("Server error");
    }
  })
  .put(async (req, res) => {
    try {
      await db.creators.update(
        {
          creator_first_name: req.body.creator_first_name,
          creator_last_name: req.body.creator_last_name,
          creator_current_state: req.body.creator_current_state,
          creator_home_state: req.body.creator_home_state,
          creator_country: req.body.creator_country
        },
        {
          where: {
            creator_id: req.body.creator_id
          }
        }
      );
      res.send("Successfully Updated");
    } catch (err) {
      console.error(err);
      res.error("Server error");
    }
  })
  .delete((req, res) => {
    res.send("Action unavailable");
  });
*/
// /// /////////////////////////////////
// /// ////////Meals Endpoints//////////
// /// /////////////////////////////////
// router.get("/meals", async (req, res) => {
//   try {
//     const meals = await db.Meals.findAll();
//     res.json(meals);
//   } catch (err) {
//     console.error(err);
//     res.error("Server error");
//   }
// });

// router.get("/meals/:meal_id", async (req, res) => {
//   try {
//     const meals = await db.Meals.findAll({
//       where: {
//         meal_id: req.params.meal_id,
//       },
//     });
//     res.json(meals);
//   } catch (err) {
//     console.error(err);
//     res.error("Server error");
//   }
// });

// router.put("/meals", async (req, res) => {
//   try {
//     await db.Meals.update(
//       {
//         meal_name: req.body.meal_name,
//         meal_category: req.body.meal_category,
//       },
//       {
//         where: {
//           meal_id: req.body.meal_id,
//         },
//       }
//     );
//     res.send("Meal Successfully Updated");
//   } catch (err) {
//     console.error(err);
//     res.error("Server error");
//   }
// });

// /// /////////////////////////////////
// /// ////////Macros Endpoints/////////
// /// /////////////////////////////////
// router.get("/macros", async (req, res) => {
//   try {
//     const macros = await db.Macros.findAll();
//     res.send(macros);
//   } catch (err) {
//     console.error(err);
//     res.error("Server error");
//   }
// });

// router.get("/macros/:meal_id", async (req, res) => {
//   try {
//     const meals = await db.Macros.findAll({
//       where: {
//         meal_id: req.params.meal_id,
//       },
//     });
//     res.json(meals);
//   } catch (err) {
//     console.error(err);
//     res.error("Server error");
//   }
// });

// router.put("/macros", async (req, res) => {
//   try {
//     // N.B. - this is a good example of where to use code validation to confirm objects
//     await db.Macros.update(
//       {
//         meal_name: req.body.meal_name,
//         meal_category: req.body.meal_category,
//         calories: req.body.calories,
//         serving_size: req.body.serving_size,
//         cholesterol: req.body.cholesterol,
//         sodium: req.body.sodium,
//         carbs: req.body.carbs,
//         protein: req.body.protein,
//         fat: req.body.fat,
//       },
//       {
//         where: {
//           meal_id: req.body.meal_id,
//         },
//       }
//     );
//     res.send("Successfully Updated");
//   } catch (err) {
//     console.error(err);
//     res.error("Server error");
//   }
// });

// /// /////////////////////////////////
// /// Dietary Restrictions Endpoints///
// /// /////////////////////////////////
// router.get("/restrictions", async (req, res) => {
//   try {
//     const restrictions = await db.DietaryRestrictions.findAll();
//     res.json(restrictions);
//   } catch (err) {
//     console.error(err);
//     res.error("Server error");
//   }
// });

// router.get("/restrictions/:restriction_id", async (req, res) => {
//   try {
//     const restrictions = await db.DietaryRestrictions.findAll({
//       where: {
//         restriction_id: req.params.restriction_id,
//       },
//     });
//     res.json(restrictions);
//   } catch (err) {
//     console.error(err);
//     res.error("Server error");
//   }
// });

// /// //////////////////////////////////
// /// ///////Custom SQL Endpoint////////
// /// /////////////////////////////////
// const macrosCustom =
//   "SELECT `Dining_Hall_Tracker`.`Meals`.`meal_id` AS `meal_id`,`Dining_Hall_Tracker`.`Meals`.`meal_name` AS `meal_name`,`Dining_Hall_Tracker`.`Macros`.`calories` AS `calories`,`Dining_Hall_Tracker`.`Macros`.`carbs` AS `carbs`,`Dining_Hall_Tracker`.`Macros`.`sodium` AS `sodium`,`Dining_Hall_Tracker`.`Macros`.`protein` AS `protein`,`Dining_Hall_Tracker`.`Macros`.`fat` AS `fat`,`Dining_Hall_Tracker`.`Macros`.`cholesterol` AS `cholesterol`FROM(`Dining_Hall_Tracker`.`Meals`JOIN `Dining_Hall_Tracker`.`Macros`)WHERE(`Dining_Hall_Tracker`.`Meals`.`meal_id` = `Dining_Hall_Tracker`.`Macros`.`meal_id`)";
// router.get("/table/data", async (req, res) => {
//   try {
//     const result = await db.sequelizeDB.query(macrosCustom, {
//       type: sequelize.QueryTypes.SELECT,
//     });
//     res.json(result);
//   } catch (err) {
//     console.error(err);
//     res.error("Server error");
//   }
// });

// const mealMapCustom = `SELECT hall_name,
//   hall_address,
//   hall_lat,
//   hall_long,
//   meal_name
// FROM
//   Meals m
// INNER JOIN Meals_Locations ml
//   ON m.meal_id = ml.meal_id
// INNER JOIN Dining_Hall d
// ON d.hall_id = ml.hall_id;`;
// router.get("/map/data", async (req, res) => {
//   try {
//     const result = await db.sequelizeDB.query(mealMapCustom, {
//       type: sequelize.QueryTypes.SELECT,
//     });
//     res.json(result);
//   } catch (err) {
//     console.error(err);
//     res.error("Server error");
//   }
// });
// router.get("/custom", async (req, res) => {
//   try {
//     const result = await db.sequelizeDB.query(req.body.query, {
//       type: sequelize.QueryTypes.SELECT,
//     });
//     res.json(result);
//   } catch (err) {
//     console.error(err);
//     res.error("Server error");
//   }
// });

export default router;
