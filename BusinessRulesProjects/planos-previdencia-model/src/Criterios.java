
public class Criterios {

	private float rendaMensal;
	private float valorContribuicao;
	private String declaracaoIR;
	private String planoPrevidencia;
	private float contribuicao_versus_renda;
	
	public Criterios() {
		
	}
	
	public Criterios(float rendaMensal, float valorContribuicao, String declaracaoIR) {
		this.rendaMensal = rendaMensal;
		this.valorContribuicao = valorContribuicao;
		this.declaracaoIR = declaracaoIR;
		contribuicao_versus_renda = valorContribuicao / rendaMensal;
	}
	
	public float getRendaMensal() {
		return rendaMensal;
	}
	public void setRendaMensal(float rendaMensal) {
		this.rendaMensal = rendaMensal;
	}
	public float getValorContribuicao() {
		return valorContribuicao;
	}
	public void setValorContribuicao(float valorContribuicao) {
		this.valorContribuicao = valorContribuicao;
	}
	public String getDeclaracaoIR() {
		return declaracaoIR;
	}
	public void setDeclaracaoIR(String declaracaoIR) {
		this.declaracaoIR = declaracaoIR;
	}
	public String getPlanoPrevidencia() {
		return planoPrevidencia;
	}
	public void setPlanoPrevidencia(String planoPrevidencia) {
		this.planoPrevidencia = planoPrevidencia;
	}

	public float getContribuicao_versus_renda() {
		return contribuicao_versus_renda;
	}

	public void setContribuicao_versus_renda(float contribuicao_versus_renda) {
		this.contribuicao_versus_renda = contribuicao_versus_renda;
	}
	
	
}
