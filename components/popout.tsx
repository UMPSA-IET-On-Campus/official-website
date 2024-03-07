import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button"
import {
    Alert,
    AlertDescription,
    AlertTitle,
  } from "@/components/ui/alert"


export function Popout() {

  return (
    <Alert className="p-2 md:p-4">
    <Dialog>
    <AlertDescription className="flex items-center space-x-2 animate-moveRightToLeft infinite">
        <span className="text-3xl">
            📢 
        </span>
        <span className="text-sm md:text-base">
            Check out the interview result for the committees.
        </span>
        <DialogTrigger asChild>
        <Button>Check Result</Button>
      </DialogTrigger>
      </AlertDescription>
 
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Interview Results</DialogTitle>
          <DialogDescription>
            The interview results are as follows:
          </DialogDescription>
        </DialogHeader>
        <div className="py-4">
            <ul className="list-disc list-inside">
              <li>
                <strong>Activist Team</strong>
                <ul>
                  <li>Muthira A/P Ravindra</li>
                  <li>Nimmisha Dhurga A/P Siva Chandra</li>
                  <li>ANBUALAGAN A/L CHANDRAN</li>
                </ul>
              </li>
              <li>
                <strong>Multimedia</strong>
                <ul>
                  <li>LIOW WEN AN</li>
                  <li>RAMYAH A/P LOGANATHAN</li>
                </ul>
              </li>
              <li>
                <strong>Sponsorship</strong>
                <ul>
                  <li>SHATHIVEL A/L HARI RAMA KRISHNAN</li>
                  <li>SAINTTHYAGARAJA A/L SARAVANAN</li>
                </ul>
              </li>
              <li>
                <strong>Logistics</strong>
                <ul>
                  <li>GIRIDHAR A/L SUBRAMANIAM</li>
                  <li>VEMALRAJ A/L DORAE</li>
                </ul>
              </li>
              <li>
                <strong>Human Resource</strong>
                <ul>
                  <li>NAGESHWARAN NAIR S/O THIVAGARAN NAIR</li>
                  <li>PRAMUGH A/L RAMASAMY</li>
                </ul>
              </li>
            </ul>
          </div>	
      </DialogContent>
    </Dialog>

    </Alert>

  );
}
