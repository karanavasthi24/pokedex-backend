import { Router } from 'express';
import * as pokemonController from '../controllers/pokemon';

const router = Router();

router.get('/', pokemonController.index);
router.get('/id/:id', pokemonController.getById);
router.get('/name/:name', pokemonController.getByName);

export default router;
