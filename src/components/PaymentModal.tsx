
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CreditCard, QrCode, CheckCircle } from "lucide-react";

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  paymentMethod: "pix" | "card";
  amount: number;
}

const PaymentModal = ({ isOpen, onClose, paymentMethod, amount }: PaymentModalProps) => {
  const [step, setStep] = useState<"payment" | "success">("payment");
  const [cardData, setCardData] = useState({
    number: "",
    expiry: "",
    cvv: "",
    name: ""
  });

  const handlePayment = () => {
    // Simula processamento do pagamento
    setTimeout(() => {
      setStep("success");
    }, 2000);
  };

  const handleClose = () => {
    setStep("payment");
    setCardData({ number: "", expiry: "", cvv: "", name: "" });
    onClose();
  };

  if (step === "success") {
    return (
      <Dialog open={isOpen} onOpenChange={handleClose}>
        <DialogContent className="max-w-md">
          <div className="text-center py-8">
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Pagamento Concluído!
            </h2>
            <p className="text-gray-600 mb-6">
              Seu pagamento de R$ {amount} foi processado com sucesso.
            </p>
            <Button onClick={handleClose} className="w-full">
              Fechar
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            {paymentMethod === "card" ? <CreditCard className="w-5 h-5" /> : <QrCode className="w-5 h-5" />}
            {paymentMethod === "card" ? "Pagamento com Cartão" : "Pagamento via PIX"}
          </DialogTitle>
        </DialogHeader>

        <Card>
          <CardContent className="p-6">
            {paymentMethod === "card" ? (
              <div className="space-y-4">
                <div>
                  <Label htmlFor="cardNumber">Número do Cartão</Label>
                  <Input
                    id="cardNumber"
                    placeholder="1234 5678 9012 3456"
                    value={cardData.number}
                    onChange={(e) => setCardData({ ...cardData, number: e.target.value })}
                  />
                </div>
                <div>
                  <Label htmlFor="cardName">Nome no Cartão</Label>
                  <Input
                    id="cardName"
                    placeholder="João Silva"
                    value={cardData.name}
                    onChange={(e) => setCardData({ ...cardData, name: e.target.value })}
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="cardExpiry">Validade</Label>
                    <Input
                      id="cardExpiry"
                      placeholder="MM/AA"
                      value={cardData.expiry}
                      onChange={(e) => setCardData({ ...cardData, expiry: e.target.value })}
                    />
                  </div>
                  <div>
                    <Label htmlFor="cardCvv">CVV</Label>
                    <Input
                      id="cardCvv"
                      placeholder="123"
                      value={cardData.cvv}
                      onChange={(e) => setCardData({ ...cardData, cvv: e.target.value })}
                    />
                  </div>
                </div>
              </div>
            ) : (
              <div className="text-center space-y-4">
                <div className="w-48 h-48 mx-auto bg-gray-100 rounded-lg flex items-center justify-center">
                  <QrCode className="w-32 h-32 text-gray-400" />
                </div>
                <p className="text-sm text-gray-600">
                  Escaneie o QR Code com o app do seu banco
                </p>
                <div className="p-3 bg-gray-50 rounded">
                  <p className="text-xs text-gray-500">Chave PIX (simulada):</p>
                  <p className="text-sm font-mono">futurus@pix.com.br</p>
                </div>
              </div>
            )}

            <div className="mt-6 p-4 bg-blue-50 rounded-lg">
              <div className="flex justify-between items-center font-bold text-lg">
                <span>Total:</span>
                <span>R$ {amount}</span>
              </div>
            </div>

            <Button 
              onClick={handlePayment}
              className="w-full mt-6 gradient-bg text-white hover:opacity-90"
            >
              {paymentMethod === "card" ? "Finalizar Pagamento" : "Confirmar PIX"}
            </Button>
          </CardContent>
        </Card>
      </DialogContent>
    </Dialog>
  );
};

export default PaymentModal;
