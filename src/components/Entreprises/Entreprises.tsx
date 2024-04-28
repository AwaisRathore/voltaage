import { Button } from "../ui/button";
import { Input } from "../ui/input";
import EntreprisesTable from "./EntreprisesTable";
export default function Entreprises() {
  return (
    <>
      <div className=" flex flex-col p-0 md:py-6 md:pl-0 md:pr-6">
        <div className="overflow-clip rounded-0 bg-gray-100 md:rounded-2xl">
          <div className="flex bg-white px-4 py-8 md:px-6">
            <div className="flex flex-col gap-1">
              <div className="text-xs font-normal text-slate-300">
                Entreprises
              </div>
              <div className="text-2xl font-bold text-neutral-800">
                Ajouter une nouvelle entreprise
              </div>
              <div className="pb-6 text-base font-normal text-neutral-800">
                Copiez et envoyez ce lien aux entreprises de votre territoire
                pour leur envoyer un questionnaire sur leur besoins en terme de
                récharge
              </div>
              <div className="flex w-fit gap-4 rounded-3xl  border-2 border-slate-100 p-4">
                <Input className="border-0" type="text" />
                <Button className="rounded-2xl px-6 hover:bg-indigo-400">
                  Copier
                </Button>
              </div>
              <div className="pt-6 text-base font-semibold text-indigo-500 underline">
                Ici un example du questionnaire
              </div>
            </div>
          </div>
          <div className="rounded-0 flex h-full flex-1 flex-col gap-1 px-4 py-8 md:px-6">
            <div className="text-2xl font-bold text-neutral-800">
              Entreprises Ajoutées
            </div>
            <div className="pb-6 text-base font-normal text-neutral-800">
              Ajoutez les entreprises du territoire et decouvré leur besoin de
              charge
            </div>
            <div>
              <EntreprisesTable />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
