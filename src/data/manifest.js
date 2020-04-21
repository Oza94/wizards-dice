import gen_humanmale_firstname from './rolltable/generic/name/humanmale_firstname.yaml'
import gen_humanfem_firstname from './rolltable/generic/name/humanfem_firstname.yaml'
import gen_human_lastname from './rolltable/generic/name/human_lastname.yaml'
import gen_humanmale_name from './rolltable/generic/name/humanmale_name.yaml'
import gen_humanfem_name from './rolltable/generic/name/humanfem_name.yaml'
import gen_dwarfmale_firstname from './rolltable/generic/name/dwarfmale_firstname.yaml'
import gen_dwarf_lastname from './rolltable/generic/name/dwarf_lastname.yaml'
import gen_dwarfmale_name from './rolltable/generic/name/dwarfmale_name.yaml'
import gen_elfmale_firstname from './rolltable/generic/name/elfmale_firstname.yaml'
import gen_elf_lastname from './rolltable/generic/name/elf_lastname.yaml'
import gen_elfmale_name from './rolltable/generic/name/elfmale_name.yaml'
import gen_creature_appearance from './rolltable/generic/creature/appearance.yaml'
import gen_creature_trait from './rolltable/generic/creature/trait.yaml'
import gen_creature_mania from './rolltable/generic/creature/mania.yaml'
import gen_creature_talent from './rolltable/generic/creature/talent.yaml'
import tpl_creature_humanoid from './template/generic/creature_humanoid.yaml'
import tpl_creature_human from './template/generic/creature_human.yaml'
import tpl_creature_dwarf from './template/generic/creature_dwarf.yaml'
import { importRolltable } from '../helpers/rolltable'

const rolltables = {
  gen_humanmale_firstname: importRolltable(gen_humanmale_firstname),
  gen_humanfem_firstname: importRolltable(gen_humanfem_firstname),
  gen_human_lastname: importRolltable(gen_human_lastname),
  gen_humanmale_name: importRolltable(gen_humanmale_name),
  gen_humanfem_name: importRolltable(gen_humanfem_name),
  gen_dwarfmale_firstname: importRolltable(gen_dwarfmale_firstname),
  gen_dwarf_lastname: importRolltable(gen_dwarf_lastname),
  gen_dwarfmale_name: importRolltable(gen_dwarfmale_name),
  gen_elfmale_firstname: importRolltable(gen_elfmale_firstname),
  gen_elf_lastname: importRolltable(gen_elf_lastname),
  gen_elfmale_name: importRolltable(gen_elfmale_name),
  gen_creature_appearance: importRolltable(gen_creature_appearance),
  gen_creature_trait: importRolltable(gen_creature_trait),
  gen_creature_mania: importRolltable(gen_creature_mania),
  gen_creature_talent: importRolltable(gen_creature_talent),
}

const templates = {
  tpl_creature_humanoid,
  tpl_creature_human,
  tpl_creature_dwarf,
}

export { rolltables, templates }
