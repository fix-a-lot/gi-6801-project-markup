import {SiteHeader} from '@/components/game-header';
import {HeroSearch} from '@/components/character-search';
import {SiteFooter} from '@/components/site-footer';
import {CharacterProfileHeader} from '@/components/character-profile-header';
import {CharacterStats} from '@/components/character-stats';
import {CharacterEquipment} from '@/components/character-equipment';
import {CharacterEngravings} from '@/components/character-engravings';
import {CharacterGems} from '@/components/character-gems';
import {characterProfiles, defaultCharacterName} from '@/lib/mock-data';

export default async function CharacterPage({params}: {params: Promise<{name: string}>}) {
  const {name} = await params;
  const decodedName = decodeURIComponent(name);
  const character = characterProfiles[decodedName] ?? characterProfiles[defaultCharacterName];

  return (
    <div className="min-h-screen">
      <SiteHeader />
      <HeroSearch />

      <main className="mx-auto max-w-[1280px] px-4 py-4 lg:px-6 lg:py-5">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-[minmax(0,1fr)_320px]">
          <div className="flex flex-col gap-4">
            <CharacterProfileHeader character={character} />
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <CharacterEquipment title="장비" dataComponent="캐릭터장비" items={character.equipment} />
              <CharacterEquipment title="악세서리" dataComponent="캐릭터악세서리" items={character.accessories} />
            </div>
            <CharacterEngravings character={character} />
            <CharacterGems character={character} />
          </div>

          <aside className="flex flex-col gap-4">
            <CharacterStats character={character} />
          </aside>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
