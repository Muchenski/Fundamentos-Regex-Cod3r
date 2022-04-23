package regex.executando_expressoes_regulares;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class EntendendoAsFlags {

	public static void main(String[] args) {

		// O Java realiza pesquisas globais.

		// g - Global (para retornar todos os casos, senão, retorna apenas o primeiro match)
		// i - Ignore case

		String texto = "Carlos assinou o abaixo-assinado";

		Pattern pattern;
		Matcher matcher;

		/////////////////////////////////////////////////////

		// Procurando a letra "C" ou o texto "ab".
		pattern = Pattern.compile("C|ab"); // Não global e case sensitive.
		matcher = pattern.matcher(texto);

		// Full match: C
		buscaOPrimeiroResultado(matcher);

		/////////////////////////////////////////////////////

		// Procurando a letra "c" ou o texto "ab".
		pattern = Pattern.compile("c|ab"); // Não global e case sensitive.
		matcher = pattern.matcher(texto);

		// Full match: ab
		buscaOPrimeiroResultado(matcher);

		/////////////////////////////////////////////////////

		// Procurando o texto "ab" ou a letra "c".
		pattern = Pattern.compile("ab|c", Pattern.CASE_INSENSITIVE); // Não global e case insensitive.
		matcher = pattern.matcher(texto);

		// Full match: C
		buscaOPrimeiroResultado(matcher);

		/////////////////////////////////////////////////////

		// Procurando o texto "ab" ou a letra "c".
		pattern = Pattern.compile("ab|c", Pattern.CASE_INSENSITIVE); // Global e case insensitive.
		matcher = pattern.matcher(texto);

		// Full match: C
		// Full match: ab
		buscaGLobal(matcher);

		/////////////////////////////////////////////////////
	}

	private static void buscaOPrimeiroResultado(Matcher matcher) {
		if (matcher.find()) {
			System.out.println("Full match: " + matcher.group(0));

			for (int i = 1; i <= matcher.groupCount(); i++) {
				System.out.println("Group " + i + ": " + matcher.group(i));
			}
		}
		System.out.println("############################");
	}

	private static void buscaGLobal(Matcher matcher) {
		while (matcher.find()) {
			System.out.println("Full match: " + matcher.group());

			for (int i = 1; i <= matcher.groupCount(); i++) {
				System.out.println("Group " + i + ": " + matcher.group(i));
			}
		}
		System.out.println("############################");
	}

}
